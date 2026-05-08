<script setup lang="ts">
const items = [
    {
        icon: 'users',
        title: '¿Quiénes somos?',
        text: 'LIGART-ITOAX Laboratorio de Información Geográfica y Análisis Regional y Territorial del ITO diseñado para integrar, organizar y analizar datos geográficos y estadísticos de manera sistemática, con el objetivo de apoyar la investigación, la formación académica y la toma de decisiones estratégicas en el contexto educativo, científico y territorial del Posgrado en Ciencias en Desarrollo Regional y Tecnológico del ITO.',
    },
    {
        icon: 'rocket',
        title: 'Misión',
        text: 'Consolidar un laboratorio académico-técnico en Sistemas de Información Geográfica del ITO, para integrar y gestionar datos geográficos y estadísticos en un repositorio de calidad. Su propósito es fortalecer la investigación del Posgrado en Ciencias en Desarrollo Regional y Tecnológico, impulsando el análisis territorial y el desarrollo sostenible.',
    },
    {
        icon: 'lightbulb',
        title: 'Visión',
        text: 'Ser reconocido como referente regional en geoinformación aplicada al desarrollo territorial en Oaxaca, promoviendo la formación de recursos humanos especializados, la creación de mapas interactivos y el impulso de políticas públicas basadas en evidencia científica y geoespacial.',
    },
]
</script>

<template>
    <v-img
        cover
        min-height="1056"
        src="/img/worldmap-light.svg"
        image-class="image-background"
    >
        <div class="d-flex align-center justify-center fill-height">
            <v-container class="text-center">
                <v-row justify="center">
                    <v-col cols="8">
                        <h1 data-aos="fade-up" class="font-weight-semibold font-size-large-custom">
                            Laboratorio de información geográfica, análisis regional y territorial del instituto tecnológico de Oaxaca
                        </h1>
                    </v-col>
                </v-row>

                <v-row justify="space-around">
                    <v-col
                        lg="3"
                        cols="12"
                        data-aos="fade-up"
                        v-for="(item, index) in items"
                        :data-aos-delay="100 + (index * 50)"
                    >
                        <v-icon
                            color="info"
                            class="font-size-large-custom"
                            :icon="`fas fa-${ item.icon }`"
                        />

                        <h5 class="font-weight-medium font-size-small-custom" v-text="item.title" />

                        <p v-text="item.text" />
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </v-img>
</template>