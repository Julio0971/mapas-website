<script setup>
const ejidos = [
    'Santa Catarina Quiané',
    'San Miguel Tlanichico',
    'Reyes Mantecón',
    'María Asunción Roaló'
]

const estates = [
    'Santa Catarina Quiané',
    'Santa Cruz Papalutla',
]

const imgs = [
    '03b50699-ca1e-4b9e-a826-0e09e61c1c38.JPEG',
    'IMG_2753.jpg',
    'IMG_2756.jpg',
    'IMG_2820.jpg',
    'IMG_2863.jpg',
    'IMG_2885.jpg',
    'IMG_2906.jpg',
    'IMG_2959.jpg',
    'IMG_3076.jpg',
    'IMG_3083.jpg',
    'IMG_3086.jpg',
    'IMG_3095.jpg',
    'IMG_3110.jpg',
    'IMG_3117.jpg',
    'IMG_3131.jpg',
    'IMG_3132.jpg',
    'IMG_3141.jpg',
    'IMG_3147.jpg',
    'IMG_3152.jpg',
    'IMG_3177.jpg',
    'IMG_3190.jpg',
    'IMG_3206(1).jpg',
    'IMG_3206.jpg',
    'IMG_3211(1).jpg',
    'IMG_3211.jpg',
    'IMG_3367(1).jpg',
    'IMG_3367.jpg',
    'IMG_3416(1).jpg',
    'IMG_3416.jpg',
    'IMG_3418(1).jpg',
    'IMG_3418.jpg',
    'IMG_3423(1).jpg',
    'IMG_3423.jpg',
    'IMG_3457.jpg',
    'IMG_3459.jpg',
    'IMG_3464.jpg',
    'IMG_3473.jpg',
    'IMG_6638.jpg',
    'IMG_6642.jpg',
    'IMG_6825.jpg',
    'IMG_6829.jpg',
    'fd380e53-45b3-4bcc-a3c7-fd3359df673b.JPEG'
]
</script>

<template>
    <div class="bg-background">
        <v-container>
            <v-row justify="center" class="mb-6">
                <v-col cols="12" sm="6">
                    <h1 class="display-6">
                        Libramiento sur
                    </h1>
                    
                    <p>
                        A lo largo de 2022 se realizó el Proyecto del corredor carretero Libramiento Sur de Oaxaca, ahora conocido por el gobierno de Salomón Jara como Corredor Zapoteco.
                    </p>

                    <p>
                        A través de este proyecto el gobierno del estado promueve la comunicación e impulsar el turismo. No obstante, el trazo de este proyecto carretero atraviesa por 20 núcleos agrarios y 18 municipios en los valles centrales, con lo que se pretende unir la vía hacia la costa e istmo, donde más que conectar, lo que hará es avivar las condiciones de venta y acaparamiento de tierras y agua. De acuerdo con la Manifestación de Impacto Ambiental (MIA) este proyecto comprende un trazo de 67.5 km de longitud, con un derecho de vía de 60 m de ancho, la construcción de 6 entronques, 36 obras mayores (pasos inferiores, superiores, ganado y de personas), el proyecto inicia en el municipio de Soledad de Etla y termina en el municipio de San Jerónimo Tlacochahuaya.
                    </p>

                    <p>
                        De esta forma a solicitud de un grupo de ejidos y comunidades se realizaron recorridos de campo para georreferenciar zonas afectadas de forma directa e indirecta en sus comunidades para hacer cartografía y entregar a los comisariados como herramienta cartográfica de apoyo para dar a conocer los impactos y afectaciones del proyecto en sus comunidades. En la cartografía se muestra las afectaciones en zonas de cultivos para autoconsumo y venta, pozos de riego, arroyos, ojos de agua, retenes de agua, pequeñas presas, arroyos, flora y fauna silvestre, zonas de recolección de flores, chapulines, frutas, áreas de recreación para muchas familias. Por otra parte se da cuenta de cómo la construcción de este corredor se relaciona con otros proyectos carreteros e industriales al interior de la entidad.
                    </p>

                    <p>
                        Ejidos solicitantes
                    </p>

                    <v-list>
                        <v-list-item
                            :title="ejido"
                            v-for="ejido in ejidos"
                        >
                            <template #prepend>
                                <v-icon icon="fas fa-check" size="small" />
                            </template>
                        </v-list-item>
                    </v-list>
                    
                    <p>
                        Bienes comunales solicitantes
                    </p>

                    <v-list>
                        <v-list-item
                            :title="estate"
                            v-for="estate in estates"
                        >
                            <template #prepend>
                                <v-icon icon="fas fa-check" size="small" />
                            </template>
                        </v-list-item>
                    </v-list>
                </v-col>

                <v-col cols="12" sm="6">
                    <v-row>
                        <v-col cols="12" md="6" v-for="img in imgs">
                            <v-card>
                                <v-img cover :src="`/img/project_2/${ img }`" />
                            </v-card>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>