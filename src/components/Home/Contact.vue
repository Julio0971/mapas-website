<script setup lang="ts">
import mapboxgl from 'mapbox-gl'
import { onMounted, ref } from 'vue'

import 'mapbox-gl/dist/mapbox-gl.css'

const items = ref([
    {
        title: 'Puedes llamarnos',
        text: 'Nuestro equipo está disponible para atender tus dudas y brindarte la información que necesites sobre los proyectos y actividades del LIGART-ITOAX.',
        icon: 'mobile-screen',
        contact: '+01 1234-567-890'
    },
    {
        title: 'Envíanos un correo',
        text: 'Si deseas un contacto más formal o compartir documentos, escríbenos y con gusto responderemos a la brevedad.',
        icon: 'envelope',
        contact: 'rakesh.sharma856'
    },
    {
        title: 'Búscanos directamente en la institución',
        text: 'Visítanos en las instalaciones del Instituto Tecnológico de Oaxaca, donde estaremos encantados de recibirte y mostrarte nuestro trabajo.',
        icon: 'location-dot',
        contact: '10:00 am - 8:00 pm'
    },
])

onMounted(() => {
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN

    const map = new mapboxgl.Map({
        zoom: 9,
        container: 'map',
        center: [-96.92, 17.08],
        style: 'mapbox://styles/mapbox/light-v10',
    })

    map.scrollZoom.disable()

    new mapboxgl.Marker({
        color: '#6354ff',
        scale: 1.5
    }).setLngLat([-96.92, 17.08]).addTo(map);

    // const popup = new mapboxgl.Popup().setHTML('<h3>New York City</h3><p>The most populous city in the United States.</p>');

    // marker.setPopup(popup);
})
</script>

<template>
    <div class="bg-primary">
        <v-container class="py-16">
            <h1 class="text-display-large font-weight-semibold">
                Contáctanos
            </h1>

            <p class="font-weight-light" style="font-size: 1.25rem;">
                En el LIGART-ITOAX estamos abiertos a la colaboración, la investigación y el intercambio de ideas. Si deseas más información sobre nuestros proyectos, participar en actividades académicas o establecer vínculos institucionales, no dudes en comunicarte con nosotros a través de los medios disponibles.
            </p>
        </v-container>
    </div>

    <div class="bg-background">
        <v-container class="my-16">
            <v-row class="mb-10">
                <v-col
                    md="4"
                    cols="12"
                    class="text-center"
                    v-for="item in items"
                >
                    <h5
                        v-text="item.title"
                        style="font-size: 1.25rem;"
                        class="font-weight-medium mb-0"
                    />
                    
                    <p
                        v-text="item.text"
                        class="text-title-small font-weight-regular mt-2"
                    />

                    <v-btn color="white">
                        <template v-slot:prepend>
                            <v-icon :icon="`fas fa-${ item.icon }`" size="small" />
                        </template>

                        {{ item.contact }}
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
        
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

<style>
.mapboxgl-popup-content {
    padding: 0;
}
</style>