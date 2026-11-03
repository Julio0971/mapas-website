<script setup lang="ts">
import L from 'leaflet'
import { onMounted, ref } from 'vue'
import type { AxiosError } from 'axios'
import type { Layer, Project } from '../interfaces'
import { getMaxTempColor, getMinTempColor, useAxiosErrors, useAxiosRequest, useHandleMultipleRequests } from '../composables'

const projects = ref([] as Project[])
const loading = ref('getting-projects')
const all_layers = ref([] as { id: number, is_public: 1 | 0, file: File | null, geojson: null | L.GeoJSON }[])

// Variable de mapa
let map = {} as L.Map

// Inicializar mapa con cosas básicas
const setMap = () => {
    const osm = L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=pvxCaDtZ8y4b6JOS2z7p', {
        maxZoom: 19,
        attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy;MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy;OpenStreetMap contributors</a>'
    })

    const satellite = L.tileLayer('https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=pvxCaDtZ8y4b6JOS2z7p', {
        maxZoom: 19,
        attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy;MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy;OpenStreetMap contributors</a>',
    })

    L.Marker.prototype.options.icon = L.icon({
        iconUrl: '/img/marker.png',
        iconSize: [30, 30]
    })

    map = L.map('map', {
        layers: [osm]
    }).setView([23.6260333, -102.5375005], 6)

    const bases = {
        'OSM': osm,
        'Satelital': satellite
    }

    L.control.scale().addTo(map)
    L.control.layers(bases, {}, { collapsed: false }).addTo(map)
}

const getProjects = async () => {
    loading.value = 'getting-projects'

    try {
        const response = await useAxiosRequest('get', '/projects/get-all-projects')
        
        projects.value = response.data as Project[]

        console.log(projects.value);
        
    } catch (error) {
        useAxiosErrors(error as AxiosError)
    } finally {
        loading.value = ''
    }
}

const getAllLayers = async () => {
    setMap()
    
    loading.value = 'getting-all-layers'

    try {
        const response = await useAxiosRequest('get', '/layers/get-all-layers')
        const layers = response.data as Layer[]
        const urls = layers.map(l => `/layers/${ l.id }`)
        const responses = await useHandleMultipleRequests(urls)

        all_layers.value = layers.map((l, i) => {
            const id = l.id
            const geojson = null
            const is_public = l.is_public
            const file = responses[i] ? responses[i].data : null

            return { id, is_public, file, geojson }
        })

        all_layers.value.filter(al => al.is_public == 1).map(al => ({
            ...al,
            geojson: L.geoJSON(al.file as never, { onEachFeature, style }).addTo(map)
        }))
    } catch (error) {
        useAxiosErrors(error as AxiosError)
    } finally {
        loading.value = ''
    }
}

const style = (feature: any) => {
    if (feature && feature.properties && feature.properties.tmin_rango) {
        return {
            fillColor: getMinTempColor(feature.properties.tmin_rango),
            fillOpacity: 0.7,
            color: 'transparent'
        }
    } else if (feature && feature.properties && feature.properties.tmax_rango) {
        return {
            fillColor: getMaxTempColor(feature.properties.tmax_rango),
            fillOpacity: 0.7,
            color: 'transparent'
        }
    }

    return {
        fillColor: '#FFF',
        weight: 1,
        color: 'black'
    }
}

const onEachFeature = (feature: any, layer: L.Layer) => {
    if (feature.properties) {
        let x = ''

        Object.entries(feature.properties).map((item: any) => {
            x += `${ item[0] }: ${ item[1] }<br>`
        })

        layer.bindPopup(x)
    }
}

onMounted(() => {
    getProjects()
    getAllLayers()
})
</script>

<template>
    <v-card-text>
        <v-row>
            <v-col cols="12" md="10">
                <v-skeleton-loader type="card" v-if="loading == 'getting-all-layers'" />

                <div id="map" />
            </v-col>
            
            <v-col cols="12" md="2">
                <Transition mode="out-in" name="fade">
                    <v-skeleton-loader
                        type="article"
                        v-if="loading == 'getting-projects'"
                    />
    
                    <div v-else>
                        <template v-for="project in projects">
                            <h3 v-text="project.title" />
                            <p v-text="project.description" />
                            <p v-text="project.municipality" class="mb-3" />
                        </template>
                    </div>
                </Transition>
            </v-col>
        </v-row>
    </v-card-text>
</template>

<style>
#map {
    width: 100%;
    height: calc(100vh - 300px);
}
</style>