<script setup lang="ts">
import L from 'leaflet'
import type { AxiosError } from 'axios'
import { onMounted, ref, watch } from 'vue'
import type { Layer, Project } from '../interfaces'
import { getMaxTempColor, getMinTempColor, useAxiosErrors, useAxiosRequest, useHandleMultipleRequests } from '../composables'

const projects = ref([] as Project[])
const loading = ref('getting-projects')
const layers_selected = ref([] as number[])
const all_layers = ref([] as { id: number, title: string, is_basis: 1 | 0, file: File | null, geojson: null | L.GeoJSON }[])

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

    // Cuadro con botones de registro e inicio de sesión
    const info_box = L.control.attribution({
        position: 'bottomright'
    });

    info_box.onAdd = function () {
        const div = L.DomUtil.create('div')
        
        div.innerHTML = `
            <div class="v-container v-locale--is-ltr aos-init aos-animate" data-aos="fade-right">
                <div class="v-row justify--end v-row--density-default justify-end">
                    <div class="v-col v-col--cols-md-6 v-col--cols-12">
                        <div
                            role="alert"
                            style="background-color: rgb(239, 238, 255);"
                            class="v-alert v-theme--light v-theme-on-light v-alert--density-default v-alert--variant-flat px-3 py-2 rounded-lg"
                        >
                            <span class="v-alert__underlay"></span>

                            <div class="v-alert__content">
                                <p class="text-center">
                                    Si usted conoce otra informacion geográfica que pueda complementar este mapa, le pedimos que llene el formulario.
                                </p>

                                <hr
                                    role="separator"
                                    style="border-style: solid;"
                                    aria-orientation="horizontal"
                                    class="v-divider v-theme--light mb-5"
                                >
                                
                                <div class="v-row align--center justify--space-around v-row--density-default align-center justify-space-around">
                                    <div class="v-col v-col--cols-md-6 v-col--cols-12 mb-2">
                                        <a
                                            target="_blank"
                                            href="https://visor.mysysint.site/#/login-request"
                                            class="v-btn v-btn--block v-btn--elevated v-theme--light bg-white v-btn--density-default v-btn--size-default v-btn--variant-elevated"
                                        >
                                            <span class="v-btn__overlay"></span>
                                            <span class="v-btn__underlay"></span>
                                            <span class="v-btn__content" data-no-activator="">
                                                Registrate
                                            </span>
                                        </a>
                                    </div>

                                    <div class="v-col v-col--cols-md-6 v-col--cols-12 mb-2">
                                        <a
                                            target="_blank"
                                            href="https://visor.mysysint.site"
                                            class="v-btn v-btn--block v-btn--elevated v-theme--light bg-white v-btn--density-default v-btn--size-default v-btn--variant-elevated"
                                        >
                                            <span class="v-btn__overlay"></span>
                                            <span class="v-btn__underlay"></span>
                                            <span class="v-btn__content" data-no-activator="">
                                                Inicia sesión
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
        
        return div
    }

    info_box.addTo(map)
}

const getProjects = async () => {
    loading.value = 'getting-projects'

    try {
        const response = await useAxiosRequest('get', '/projects/get-all-projects')
        
        projects.value = response.data as Project[]
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
        const urls = layers.filter(l => l.is_public == 1 || l.is_basis == 1).map(l => `/layers/${ l.id }`)
        const responses = await useHandleMultipleRequests(urls)

        all_layers.value = layers.filter(l => l.is_public == 1 || l.is_basis == 1).map((l, i) => {
            const id = l.id
            const geojson = null
            const title = l.title
            const is_basis = l.is_basis
            const file = responses[i] ? responses[i].data : null

            return { id, title, is_basis, file, geojson }
        })

        all_layers.value = all_layers.value.map(al => ({
            ...al,
            geojson: al.is_basis == 1 ? L.geoJSON(al.file as never, { onEachFeature, style }).addTo(map) : null
        }))

        layers_selected.value = all_layers.value.filter(al => al.is_basis == 1).map(al => al.id)
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

watch(() => layers_selected.value, ls => all_layers.value.forEach(al => {
    if (ls.includes(al.id) && al.geojson == null) {
        al.geojson = L.geoJSON(al.file as never, { onEachFeature, style }).addTo(map)
    } else if (!ls.includes(al.id) && al.geojson != null) {
        al.geojson.remove()
        al.geojson = null
    }
}))

onMounted(() => {
    getProjects()
    getAllLayers()
})
</script>

<template>
    <v-card-text>
        <v-row>
            <v-col cols="12" md="2">
                <Transition name="fade" mode="out-in">
                    <v-skeleton-loader type="card" v-if="loading == 'getting-projects'" />

                    <v-list select-strategy="leaf" v-model:selected="layers_selected" v-else class="bg-background">
                        <template v-for="project in projects.filter(p => p.layers.filter(l => l.is_public == 1).length > 0)">
                            <v-list-subheader class="text-label-large" :title="project.title" />
    
                            <v-list-item
                                :value="layer.id"
                                :title="layer.title"
                                v-for="layer in project.layers.filter(l => l.is_public == 1)"
                                :key="`${ project.title } - ${ layer.title }`"
                            >
                                <template #prepend="{ isSelected, select }">
                                    <v-list-item-action>
                                        <v-checkbox-btn :model-value="isSelected" @update:model-value="select" />
                                    </v-list-item-action>
                                </template>
                            </v-list-item>
                        </template>
    
                        <v-list-subheader class="text-label-large" title="Capas base" />
    
                        <v-list-item
                            :value="layer.id"
                            :key="layer.title"
                            :title="layer.title"
                            v-for="layer in all_layers.filter(al => al.is_basis == 1)"
                        >
                            <template #prepend="{ isSelected, select }">
                                <v-list-item-action>
                                    <v-checkbox-btn :model-value="isSelected" @update:model-value="select" />
                                </v-list-item-action>
                            </template>
                        </v-list-item>
                    </v-list>
                </Transition>
            </v-col>

            <v-col cols="12" md="8">
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