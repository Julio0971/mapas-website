<script setup lang="ts">
const items = [
    {
        image: 'mapa4.jpg',
        title: 'Laboratorio de análisis regional y territorial'
    },
    {
        image: 'mapa8.jpg',
        title: 'Sistema de información geográfica'
    },
]
</script>

<template>
    <v-carousel
        cycle
        height="660"
        hide-delimiters
        :show-arrows="false"
    >
        <v-carousel-item
            cover
            draggable
            v-for="item in items"
            :src="`/img/${ item.image }`"
            gradient="to top right, rgba(0,0,0,0.3), rgba(0,0,0,0.3)"
        >
            <div class="d-flex fill-height justify-center align-center">
                <div
                    class="text-center"
                    data-aos-delay="400"
                    style="width: 1140px;"
                    data-aos="fade-zoom-in"
                >
                    <div class="text-display-large text-white carousel-title font-weight-semibold mb-10" v-text="item.title" />
    
                    <v-btn size="x-large" color="bg-white">
                        ¿Qué es LIGART?
                    </v-btn>
                </div>
            </div>
        </v-carousel-item>
    </v-carousel>
</template>