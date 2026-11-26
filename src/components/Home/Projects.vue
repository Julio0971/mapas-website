<script setup lang="ts">
import { ref } from 'vue'

const items = ref([
    {
        image: 'img/project-1.JPEG',
        title: 'Atlas Huatulco',
        href: 'project-1',
    },
    {
        image: 'img/project-2.jpg',
        title: 'Libramiento Sur',
        href: 'project-2',
    }
])
</script>

<template>
    <div class="bg-primary" id="projects">
        <v-container class="py-16">
            <v-row justify="space-between" align="center">
                <v-col cols="12" xl="4">
                    <h3 class="font-weight-semibold" style="font-size: 2.5rem;">
                        Nuestros proyectos
                    </h3>
                </v-col>
            </v-row>

            <v-row>
                <v-col
                    sm="6"
                    lg="3"
                    cols="12"
                    v-for="item in items"
                >
                    <v-hover v-slot="{ isHovering }">
                        <v-card
                            link
                            variant="flat"
                            :to="item.href == '#!' ? undefined : item.href"
                            :class="isHovering ? 'bg-primary cursor-pointer' : 'bg-primary'"
                        >
                            <v-img
                                class="rounded-xl"
                                :src="`/${ item.image }`"
                            />
                        </v-card>
                    </v-hover>
                    
                    <p
                        v-text="item.title"
                        class="font-weight-medium mb-1 font-size-small-custom"
                    />
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>