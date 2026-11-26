<script setup lang="ts">
const imgs = [
    '1379cce9-75d6-4636-827f-a6f93e87ee33.JPEG',
    '530378f3-2e84-43ff-8cb3-bbc8d7753615.JPEG',
    '258d667e-1bb4-4a56-a5d2-8628441a5aa4.JPEG',
    '4d4ce786-9833-4118-b01f-81cbd9300cfe.JPEG',
    '7b919da3-38c1-474d-9b95-34cf9d1715d4.JPEG',
    '81755da5-c4bb-4894-8390-8e594ed34a2d.JPEG',
    'IMG_8898.jpg',
    'IMG_8903.jpg',
    'IMG_8906.jpg',
    'IMG_8919.jpg',
    'IMG_8947.jpg',
    'IMG_8951.jpg',
    'IMG_8960.jpg',
    'IMG_8973.jpg',
    'IMG_9025.jpg',
    'IMG_9042.jpg',
    'IMG_9073.jpg',
    'IMG_9118.jpg',
    'IMG_9268.jpg',
    'a0c8818d-d8ca-4bea-89c8-c171f9a86234.JPEG',
    'a933e98a-9f42-45b3-9f1b-6ceb44bcbadb.JPEG',
    'ad4c750c-f2e7-413b-a887-ff5dc44bf45f.JPEG',
    'ce3dd9f1-06d1-4d79-899a-7baf51d3b63b.JPEG',
    'edc75057-87dd-481b-b213-1bbefa7cb5bb.JPEG'
] 
</script>

<template>
    <div class="bg-background">
        <v-container>
            <v-row justify="center" class="mb-6">
                <v-col cols="12" sm="6">
                    <h1 class="display-6">
                        Atlas de Riesgos, Vulnerabilidad y Cambio Climático del municipio de Santa María Huatulco, Oax., 2023
                    </h1>
                    
                    <p class="text-justify">
                        La elaboración del Atlas permitió el trabajo de un grupo multidisiplinario de académicos y estudiantes para elaborar del documento, así como de un Sistema de Información Geográfica (SIG). El Atlas es resultado de una investigación y análisis de los riesgos, peligros y amenazas que afectan al municipio, se examinan y describen las características físicas de la infraestructura existente en la zona; así como de las características socioeconómicas de los asentamientos humanos y procesos urbanos en el área de análisis.
                    </p>

                    <p class="text-justify">
                        En el documento se encuentra un análisis territorial de los riesgos, vulnerabilidad y cambio climático, el cual, está construido como un sistema integral de información que permite evaluar el riesgo de desastre en diferentes niveles y escalas. El Atlas se erigió especialmente como un SIG, dicho sistema integra una plataforma informática basada en el SIG. 
                    </p>

                    <p class="text-justify">
                        El diseño didáctico y accesible del Atlas, permite ser consultado y leído por pobladores y especialistas de manera fácil. Al mismo tiempo, podrá ser integrado a los planes de desarrollo municipal, urbano, de los reglamentos de ordenamiento territorial, así como, de sustentabilidad ambiental y cambio climático del municipio de Santa María Huatulco.
                    </p>

                    <p class="text-justify">
                        Todo el trabajo se realizó mediante una colaboración entre el Ayuntamiento de Santa María Huatulco (2022-2024) y un grupo de trabajo multidisciplinario y multi institucional de investigadores y alumnos. De esta forma a través de la elaboración del Atlas, se integró la participación de un conjunto de investigadores de diferentes áreas de la ciencia, exactas y del área social, en donde se señaló que los riesgos son fenómenos sociales, y para abordar las problématicas que se presentan ante los riesgos, uno de los principales puntos es la profunda relación de la vulnerabilidad social de la población ante la presencia de fenómenos geológicos, hidrometeorológicos, químicos, sanitario-ambientales y socio-organizativos.
                    </p>
                </v-col>

                <v-col cols="12" sm="6">
                    <v-row>
                        <v-col cols="12" md="6" v-for="img in imgs">
                            <v-card>
                                <v-img cover :src="`/img/project_1/${ img }`" />
                            </v-card>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>