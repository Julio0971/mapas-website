<script setup lang="ts">
import { ref } from 'vue';

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
</script>

<template>
    <div class="bg-primary">
        <v-container>
            <h1 class="text-display-large font-weight-semibold">
                Contáctanos
            </h1>

            <p class="font-weight-light" style="font-size: 1.25rem;">
                En el LIGART-ITOAX estamos abiertos a la colaboración, la investigación y el intercambio de ideas. Si deseas más información sobre nuestros proyectos, participar en actividades académicas o establecer vínculos institucionales, no dudes en comunicarte con nosotros a través de los medios disponibles.
            </p>
        </v-container>
    </div>

    <div class="bg-background">
        <v-container>
            <v-row>
                <v-col
                    md="4"
                    cols="12"
                    class="text-center"
                    v-for="item in items"
                >
                    <h5 v-text="item.title" class="font-weight-medium mb-0" style="font-size: 1.25rem;" />
                    
                    <p v-text="item.text" class="text-title-small font-weight-regular mt-2" />

                    <v-btn variant="outlined">
                        <template v-slot:prepend>
                            <v-icon :icon="`fas fa-${ item.icon }`" size="small" />
                        </template>

                        {{ item.contact }}
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>