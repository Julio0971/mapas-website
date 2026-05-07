<script setup lang="ts">
import { ref } from 'vue'

const items = ref([
    {
        image: '10.png',
        date: '12 de Diciembre del 2025',
        title: 'Presentación del nuevo Sistema de Información Geográfica',
        text: 'El Instituto Tecnológico de Oaxaca, a través del LIGART-ITOAX, presentó el nuevo Sistema de Información Geográfica diseñado para integrar y analizar datos estadísticos y territoriales del estado. Esta herramienta busca apoyar la investigación académica, la planeación regional y la toma de decisiones estratégicas'
    },
    {
        image: '20.png',
        date: '06 de Enero del 2026',
        title: 'Colaboración con CEIEG Oaxaca',
        text: 'El LIGART-ITOAX inició un convenio de colaboración con el Comité Estatal de Información Estadística y Geográfica de Oaxaca, con el objetivo de fortalecer la generación de datos confiables para la planeación territorial y el desarrollo regional.'
    },
    {
        image: '30.png',
        date: '29 de Marzo del 2026',
        title: 'Taller de Mapas Temáticos en QGIS',
        text: 'Se llevara a cabo un taller de capacitación en el uso de QGIS para la creación de mapas temáticos. La actividad reunira a estudiantes, docentes e investigadores interesados en aplicar tecnologías geoespaciales al análisis territorial de Oaxaca.'
    },
])
</script>

<template>
    <div class="bg-background mb-16">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <h2
                        data-aos="fade-right"
                        class="font-weight-semibold"
                        style="font-size: 3rem; line-height: 1.2;"
                    >
                        Próximos eventos
                    </h2>
                </v-col>
            </v-row>

            <v-row>
                <v-col
                    sm="4"
                    cols="12"
                    data-aos="fade-up"
                    v-for="item in items"
                >
                    <v-hover v-slot="{ isHovering }">
                        <v-card
                            link
                            variant="flat"
                            class=" bg-surface rounded-lg"
                            :class="isHovering ? 'cursor-pointer' : ''"
                        >
                            <v-img :src="`/img/${ item.image }`" />

                            <v-card-item class="text-center">
                                <v-card-subtitle class="text-title-small">
                                    <v-icon icon="fa-regular fa-calendar" size="small" />
                                    {{ item.date }}
                                </v-card-subtitle>
                                
                                <v-card-title
                                    v-text="item.title"
                                    style="font-size: 1.25rem;"
                                    class="font-weight-medium py-3"
                                />
                            </v-card-item>

                            <v-card-text class="text-truncate" v-text="item.text" />
                        </v-card>
                    </v-hover>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>