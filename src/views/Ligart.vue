<script setup lang="ts">
import L from 'leaflet'
import 'leaflet-easyprint'
import { onMounted } from 'vue'

const setMap = async () => {
    const osm = L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=pvxCaDtZ8y4b6JOS2z7p', {
        maxZoom: 19,
        attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy;MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy;OpenStreetMap contributors</a>'
    })

    const satellite = L.tileLayer('https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=pvxCaDtZ8y4b6JOS2z7p', {
        maxZoom: 19,
        attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy;MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy;OpenStreetMap contributors</a>',
    })

    const bases = {
        'OSM': osm,
        'Satelital': satellite
    }

    L.Marker.prototype.options.icon = L.icon({
        iconUrl: '/img/marker.png',
        iconSize: [30, 30]
    })

    const map = L.map('map', {
        layers: [osm]
    }).setView([23.6260333, -102.5375005], 6)

    let response = await fetch('/src/assets/js/states.json');
    
    const states = await response.json();

    response = await fetch('/src/assets/js/municipalities.json');

    const municipalities = await response.json();
    
    response = await fetch('/src/assets/js/localities.json');

    const localities = await response.json();

    const overlays = {
        'Estados': L.geoJson(states).addTo(map),
        'Municipios': L.geoJson(municipalities).addTo(map),
        'Localidades': L.geoJson(localities).addTo(map),
    }

    L.control.scale().addTo(map)
    L.control.layers(bases, overlays, { collapsed: false }).addTo(map)

    // Cuadro con botones de registro e inicio de sesión
    const info_box = L.control.attribution({
        position: 'bottomright'
    });

    info_box.onAdd = function() {
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

onMounted(() => setMap())
</script>

<template>
    <div id="map" />
</template>

<style>
#map {
    height: calc(100vh - 330px);
}
</style>