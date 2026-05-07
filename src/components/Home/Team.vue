<script setup lang="ts">
import { ref } from 'vue';

const items = ref([
    {
        image: '11.png',
        name: 'Dra. Rosalía Camacho Lomelí',
        role: 'Coordinadora del LIGART-ITOAX',
        text: 'Especialista en Sistemas de Información Geográfica con más de 10 años de experiencia en análisis territorial y planeación regional. Lidera el laboratorio impulsando la innovación en proyectos académicos y de desarrollo en Oaxaca.'
    },
    {
        image: '13.jpg',
        name: 'Ing. José Manuel Santiago Cruz ',
        role: 'Desarrollador SIG y Analista de Datos',
        text: 'Ingeniero en Sistemas Computacionales, enfocado en el desarrollo de plataformas geoespaciales. Ha participado en proyectos de integración de bases de datos y visualización de información territorial.'
    },
    {
        image: '12.png',
        name: 'Lic. Diana Hernández Torres',
        role: 'Responsable de Vinculación y Difusión',
        text: 'Licenciada en Ciencias de la Comunicación, encargada de la difusión de resultados, la vinculación institucional y la organización de talleres y seminarios en el laboratorio dentro de el Instituto Tecnológico de Oaxaca.'
    },
    {
        image: '12.png',
        name: 'Lic. Diana Hernández Torres',
        role: 'Responsable de Vinculación y Difusión',
        text: 'Licenciada en Ciencias de la Comunicación, encargada de la difusión de resultados, la vinculación institucional y la organización de talleres y seminarios en el laboratorio dentro de el Instituto Tecnológico de Oaxaca.'
    }
])
</script>

<template>
    <v-img class="parallax mb-10" gradient="to top right, rgba(8,7,19,0.7), rgba(8,7,19,0.7)">
        <v-container class="text-white">
            <h1 class="text-display-large font-weight-semibold mb-0">
                Conoce a nuestro equipo.
            </h1>
    
            <p>
                Un equipo de trabajo con grandes habilidades y conocimiento.
            </p>
        </v-container>
    </v-img>

    <!-- <svg
        height="120"
        width="100%"
        fill="bg-background"
        style="background-color: rgba(8,7,19,0.7);"
        viewBox="0 0 1440 150"
        preserveAspectRatio="none"
        class="position-absolute end-0 bottom-0 bg-background"
    >
        <path
            d="M0,139.588931 C152,152.720009 299.666667,139.401344 443,99.6329343 C658,39.9803202 681,66.1486839 905,90.6287661 C1129,115.108848 1222,59.3955578 1293,37.4478979 C1340.33333,22.8161246 1389.33333,16.1567919 1440,17.4698997 L1440,150 L0,150 L0,139.588931 Z"
        />

        <path
            fill-opacity="0.3"
            d="M0,117.980769 C152,145.786435 299.666667,138.940533 443,97.4430619 C658,35.1968558 697,56.6671048 921,82.2115385 C1145,107.755972 1222,55.4562342 1293,32.5543282 C1340.33333,17.2863909 1389.33333,10.337522 1440,11.7077215 L1440,150 L0,150 L0,117.980769 Z"
        />

        <path
            fill-opacity="0.3"
            d="M0,106.034486 C156.666667,132.662839 291.666667,129.406134 405,96.2643713 C575,46.5517277 637,36.0308187 861,62.6436817 C1085,89.2565447 1215,51.1586623 1286,27.2988541 C1333.33333,11.3923153 1384.66667,2.2926973 1440,1.13686838e-13 L1440,150 L0,150 L0,106.034486 Z"
        />
    </svg> -->

    <div class="bg-background mb-16">
        <v-container>
            <v-row>
                <v-col v-for="item in items" data-aos="fade-up">
                    <v-card variant="flat" class="bg-background text-center">
                        <v-img class="rounded-xl mb-4" :src="`/img/${ item.image }`" />
                        <v-card-title v-text="item.name" class="font-weight-medium text-secondary" style="font-size: 1.25rem;" />
                        <v-card-subtitle v-text="item.role" class="font-weight-medium" />
                        <v-card-text v-text="item.text" class="text-body-large" />
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<style>
.parallax {
    /* The image used */
    background-image: url("/img/1.jpg");

    /* Set a specific height */
    height: 216px;

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>