<script setup lang="ts">
import { ref } from 'vue'

const items = ref([
    {
        title: 'Boletín 2024',
        file: 'boletin 2_2024.pdf'
    },
    {
        title: 'Cuadernos Relac Internac Regional Desarr_N.20',
        file: 'Cuadernos Relac Internac Regional Desarr_N.20.pdf'
    },
    {
        title: 'Libro conflictos por el agua-Oaxaca-2',
        file: 'Libro conflictos por el agua-Oaxaca-2.pdf'
    },
    {
        title: 'Reyes Etla Oaxaca Transforciones en el uso e infraestructura del agua_2024',
        file: 'Reyes Etla Oaxaca Transforciones en el uso e infraestructura del agua_2024.pdf'
    },
    {
        title: 'RTEP 2025 1',
        file: 'RTEP 2025 1.pdf'
    },
    {
        title: 'RTEP 2025 2',
        file: 'RTEP 2025 2.pdf'
    },
    {
        title: 'Textual_2025',
        file: 'Textual_2025.pdf'
    },
])
</script>

<template>
    <div class="bg-primary py-16" id="publications">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <h2 data-aos="fade-right" class="font-weight-semibold font-size-large-custom">
                        Publicaciones
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
                                :href="`/docs/${ item.file }`"
                            >
                                <template #prepend>
                                    <v-icon icon="fas fa-download" />
                                </template>
                                
                                Descargar
                            </v-btn>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>