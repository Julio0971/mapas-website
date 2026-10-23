<script setup lang="ts">
import L from 'leaflet'
import 'leaflet-easyprint'
import { onMounted, ref } from 'vue'
import type { AxiosError } from 'axios'
import type { Layer, Project } from '../interfaces'
import { useAxiosErrors, useAxiosRequest, useHandleMultipleRequests } from '../composables'

// Variables generales
const loading = ref(true)
const projects = ref([] as Project[])
const overlays = ref({} as L.Control.LayersObject)
const layers_selected = ref([] as { layer_id: number, geojson: L.GeoJSON }[])

// Variable de mapa
let map = {} as L.Map

// Capas base
const osm = L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=pvxCaDtZ8y4b6JOS2z7p', {
    maxZoom: 19,
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy;MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy;OpenStreetMap contributors</a>'
})

const satellite = L.tileLayer('https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=pvxCaDtZ8y4b6JOS2z7p', {
    maxZoom: 19,
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy;MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy;OpenStreetMap contributors</a>',
})

// Inicializar mapa con cosas básicas
const setMap = () => {
    L.Marker.prototype.options.icon = L.icon({
        iconUrl: '/img/marker.png',
        iconSize: [30, 30]
    })

    map = L.map('map', {
        layers: [osm]
    }).setView([23.6260333, -102.5375005], 6)
    
    L.control.scale().addTo(map)
}

// Setear capas de mapa
const setMapLayers = () => {
    const bases = {
        'OSM': osm,
        'Satelital': satellite
    }

    L.control.layers(bases, overlays.value, { collapsed: false }).addTo(map)

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

    // Descargar mapa
    const download_button = L.control.attribution({
        position: 'topright'
    })

    download_button.onAdd = function() {
        const div = L.DomUtil.create('div')
        
        div.innerHTML = '<button class="btn btn-primary" id="download-map-button">Descargar mapa</button>'
        
        return div
    }
    
    download_button.addTo(map)

    const x = (L as any).easyPrint({
        exportOnly: true,
        hidden: true
    }).addTo(map);

    const download_map_button = document.querySelector('#download-map-button')

    if (download_map_button) {
        download_map_button.addEventListener('click', function () {
            x.printMap('CurrentSize', 'mapa')
        })
    }
}

const getBasisLayers = async () => {
    loading.value = true
    
    setMap()

    try {
        const response = await useAxiosRequest('get', '/layers/get-basis-layers')
        const basis_layers = response.data as Layer[]
        const urls = basis_layers.map(basis_layer => `/layers/${ basis_layer.id }`)
        const overlays_array = await useHandleMultipleRequests(urls)
        const o = basis_layers.map((bl, i) => {
            const array = []

            array.push(bl.title)
            array.push(L.geoJSON(overlays_array[i].data).addTo(map))

            return array
        })

        overlays.value = Object.fromEntries(o);

        setMapLayers()
    } catch (error) {
        useAxiosErrors(error as AxiosError)
    } finally {
        loading.value = false
    }
}

const getProjects = async () => {
    loading.value = true

    try {
        const response = await useAxiosRequest('get', '/projects/get-all-projects')

        projects.value = response as Project[]
    } catch (error) {
        useAxiosErrors(error as AxiosError)
    } finally {
        loading.value = false
    }
}

const toggleLayer = async (layer: Layer) => {
    const index = layers_selected.value.findIndex(ps => ps.layer_id == layer.id)

    if (index == -1) {
        const data = await useAxiosRequest('get', `/layers/${ layer.id }`)
        
        layers_selected.value.push({
            layer_id: layer.id,
            geojson: L.geoJson(data).addTo(map)
        })
    } else {
        layers_selected.value[index].geojson.remove()
        layers_selected.value = layers_selected.value.filter(ls => ls.layer_id != layer.id)
    }
}

onMounted(() => {
    getProjects()
    getBasisLayers()
})
</script>

<template>
    <div class="bg-background">
        <v-container fluid>
            <v-row>
                <v-col cols="12" sm="2">
                    <Transition name="fade" mode="out-in">
                        <v-skeleton-loader
                            v-if="loading"
                            color="background"
                            type="list-item-three-line"
                        />
                        
                        <v-list bg-color="background" v-else>
                            <v-list-group v-for="project in projects">
                                <template #activator="{ props }">
                                    <v-list-item
                                        v-bind="props"
                                        :value="project.id"
                                        :title="`${ project.title } [${ project.layers.length }]`"
                                    />
                                </template>
    
                                <v-list-item v-for="layer in project.layers">
                                    <template #prepend>
                                        <v-list-item-action>
                                            <v-switch
                                                inset
                                                color="info"
                                                hide-details
                                                size="x-small"
                                                :label="layer.title"
                                                @change="toggleLayer(layer)"
                                            />
                                        </v-list-item-action>
                                    </template>
                                </v-list-item>
                            </v-list-group>
                        </v-list>
                    </Transition>
                </v-col>
                
                <v-col cols="12" sm="10">
                    <div id="map" />
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<style>
#map {
    height: calc(100vh - 280px);
}
</style>