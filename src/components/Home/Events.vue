<script setup lang="ts">
import { ref } from 'vue'

const items = ref([
    {
        title: 'Curso abril-jul 2021',
        docs: ['02 Presentación del curso.pptx']
    },
    {
        title: 'Curso Chetumal 2026',
        docs: ['Curso en línea.pdf']
    },
    {
        title: 'Curso Dron 2025',
        docs: [
            'Fotogrametria y drones ITO-2.pdf',
            'Procesamiento de fotografias-1.pdf'
        ]
    },
    {
        title: 'Curso Curso Feminismo 2026',
        docs: [
            'cartel curso herramientas feministas 2.jpg',
            'Curso ITO 2026.pdf'
        ]
    },
    {
        title: 'Curso oct-nov 2025',
        docs: ['Curso cartografia_SIGs_cartel 2.jpg']
    },
    {
        title: 'Curso sept-oct 2023',
        docs: ['Curso básico sobre construcción cartográfica (1).pdf']
    },
    {
        title: 'Seminario Procesos contemp de transformación territorial en Oaxaca 2026',
        docs: [
            'Cartel PCTTO 2026_.jpg',
            'Programa Final SPTTO 2026.jpg'
        ]
    },
    {
        title: 'Seminario Procesos contemporáneos de transformación territorial en Oaxaca 2024',
        docs: ['programa Seminario 2024.pdf']
    },
    {
        title: 'Seminario Procesos contemporáneos de transformación territorial en Oaxaca 2025',
        docs: [
            'Programa Seminario Oaxaca 2025_Página_1.jpg',
            'Programa Seminario Oaxaca 2025_Página_2.jpg',
            'Programa Seminario Oaxaca 2025_Página_3.jpg',
            'Programa Seminario Oaxaca 2025_Página_4.jpg'
        ]
    },
])
</script>

<template>
    <div class="bg-background" id="events">
        <v-container class="my-16">
            <v-row>
                <v-col cols="12">
                    <h2 data-aos="fade-right" class="font-weight-semibold font-size-large-custom">
                        Próximos eventos
                    </h2>
                </v-col>
            </v-row>

            <v-row>
                <v-col
                    lg="6"
                    xl="4"
                    xxl="3"
                    cols="12"
                    data-aos="fade-up"
                    v-for="item in items"
                >
                    <v-card
                        elevation="2"
                        variant="flat"
                        class=" bg-surface rounded-lg h-100"
                    >
                        <v-img src="/img/map.jpeg" />

                        <v-card-item class="text-center">
                            <v-card-title v-text="item.title" class="font-weight-medium py-3 font-size-small-custom" />
                        </v-card-item>

                        <v-card-text>
                            <v-btn
                                block
                                variant="flat"
                                target="_blank"
                                v-for="doc in item.docs"
                                :href="`/docs/${ doc }`"
                            >
                                <template #prepend>
                                    <v-icon icon="fas fa-download" />
                                </template>
                                
                                {{ doc }}
                            </v-btn>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>