<script setup lang="ts">
import mapboxgl from 'mapbox-gl'
import { onMounted } from 'vue'

import 'mapbox-gl/dist/mapbox-gl.css'

onMounted(() => {
    const map = new mapboxgl.Map({
        zoom: 12,
        container: 'map',
        scrollZoom: false,
        center: [-96.7448, 17.07779],
        style: 'mapbox://styles/mapbox/light-v10',
        accessToken: import.meta.env.VITE_MAPBOX_ACCESS_TOKEN,
    })

    const popup = new mapboxgl.Popup().setHTML('<h3>Instituto Tecnológico de Oaxaca</h3>');

    new mapboxgl.Marker({
        color: '#6354ff',
        scale: 1.5
    }).setLngLat([-96.7448, 17.07779]).setPopup(popup).addTo(map);
})
</script>

<template>
    <div class="bg-primary" id="footer">
        <v-container class="py-16">
            <h1 class="text-display-large font-weight-semibold">
                Contáctanos
            </h1>

            <p class="font-weight-light font-size-small-custom">
                En el LIGART-ITOAX estamos abiertos a la colaboración, la investigación y el intercambio de ideas. Si deseas más información sobre nuestros proyectos, participar en actividades académicas o establecer vínculos institucionales, no dudes en comunicarte con nosotros a través de los medios disponibles.
            </p>
        </v-container>
    </div>

    <div class="bg-background">
        <v-container class="my-16">
            <v-row>
                <v-col cols="12">
                    <div id="map" class="rounded-lg w-100" style="height: 350px;" />
                </v-col>
            </v-row>
        </v-container>
        
        <v-container class="my-16">
            <v-row justify="center">
                <v-col cols="12" md="8">
                    <h1 class="text-display-small font-weight-semibold mb-1">
                        Formulario de contacto
                    </h1>

                    <div class="pt-1 bg-secondary mb-12" style="width: 4rem;" />

                    <form>
                        <v-row justify="space-between">
                            <v-col cols="12" md="6">
                                <div class="text-body-large mb-2" v-text="'Nombre completo'" />

                                <v-text-field
                                    hide-details
                                    variant="outlined"
                                    density="comfortable"
                                    placeholder="Ejemplo: Julio Mendoza"
                                />
                            </v-col>
                            
                            <v-col cols="12" md="6">
                                <div class="text-body-large mb-2" v-text="'Correo'" />

                                <v-text-field
                                    hide-details
                                    variant="outlined"
                                    density="comfortable"
                                    placeholder="Ejemplo: correo@gmail.com"
                                />
                            </v-col>
                            
                            <v-col cols="12">
                                <div class="text-body-large mb-2" v-text="'Institución o empresa'" />

                                <v-text-field
                                    hide-details
                                    variant="outlined"
                                    density="comfortable"
                                    placeholder="Ejemplo: INEGI"
                                />
                            </v-col>
                            
                            <v-col cols="12">
                                <div class="text-body-large mb-2" v-text="'Mensaje'" />

                                <v-text-field
                                    hide-details
                                    variant="outlined"
                                    density="comfortable"
                                    placeholder="Ejemplo: Hola que tal buena tarde..."
                                />
                            </v-col>

                            <v-col cols="12" md="6">
                                <p class="text-title-small font-weight-regular">
                                    Responderemos en aproximadamente 2 dias habiles...
                                </p>
                            </v-col>
                            
                            <v-col cols="12" md="3">
                                <v-btn
                                    block
                                    size="x-large"
                                    class="rounded-lg"
                                    variant="outlined"
                                >
                                    Enviar mensaje
                                </v-btn>
                            </v-col>
                        </v-row>
                    </form>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>