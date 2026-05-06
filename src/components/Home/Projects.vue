<script setup lang="ts">
import { computed, ref } from 'vue'

const filter = ref('')
const filters = ref([
    'Externos',
    'Investigación',
    'Posgrado',
    'Académicos',
])
const items = ref([
    {
        image: 'drone1.jpeg',
        title: 'Manejo de drones',
        subtitle: 'Lorem ipsum dolor sit amet.',
        href: '#!',
        type: '2'
    },
    {
        image: 'curso1.jpg',
        title: 'Curso2',
        subtitle: 'Lorem ipsum dolor sit amet.',
        href: '#!',
        type: '4'
    },
    {
        image: 'curso2.jpg',
        title: 'Curso3',
        subtitle: 'Lorem ipsum dolor sit amet.',
        href: '#!',
        type: '2'
    },
    {
        image: 'curso2.jpg',
        title: 'Curso3',
        subtitle: 'Lorem ipsum dolor sit amet.',
        href: '#!',
        type: '2'
    },
    {
        image: 'drone1.jpeg',
        title: 'Curso4',
        subtitle: 'Lorem ipsum dolor sit amet.',
        href: '#!',
        type: '4'
    },
    {
        image: 'curso1.jpg',
        title: 'Curso5',
        subtitle: 'Lorem ipsum dolor sit amet.',
        href: '#!',
        type: '2'
    },
    {
        image: 'curso2.jpg',
        title: 'Curso6',
        subtitle: 'Lorem ipsum dolor sit amet.',
        href: '#!',
        type: '3'
    },
    {
        image: 'curso2.jpg',
        title: 'Curso6',
        subtitle: 'Lorem ipsum dolor sit amet.',
        href: '#!',
        type: '3'
    },
])

const items_filtered = computed(() => items.value.filter(i => i.type == filter.value || ['', 1].includes(filter.value)))
</script>

<template>
    <div class="bg-primary">
        <v-container>
            <v-row justify="space-between" align="center">
                <v-col cols="12" xl="4">
                    <h3 class="font-weight-semibold" style="font-size: 2.5rem;">
                        Nuestros proyectos
                    </h3>
                </v-col>

                <v-col
                    xl="6"
                    cols="12"
                    class="d-flex justify-end"
                >
                    <v-chip-group
                        filter
                        mandatory
                        v-model="filter"
                    >
                        <v-chip
                            disabled
                            variant="text"
                            class="opacity-100"
                        >
                            Filtrar por:
                        </v-chip>

                        <v-chip v-for="filter in filters" :text="filter" />
                    </v-chip-group>
                </v-col>
            </v-row>

            <v-row>
                <v-col
                    sm="6"
                    lg="3"
                    cols="12"
                    v-for="item in items_filtered"
                >
                    <v-hover v-slot="{ isHovering }">
                        <v-card
                            link
                            variant="flat"
                            :href="item.href == '#!' ? undefined : item.href",
                            :class="isHovering ? ' bg-primary cursor-pointer' : 'bg-primary'"
                        >
                            <v-img
                                :src="`/img/${ item.image }`"
                                class="rounded-xl"
                            />
                        </v-card>
                    </v-hover>
                    
                    <p
                        v-text="item.title"
                        style="font-size: 1.25rem;"
                        class="font-weight-medium mb-1"
                    />

                    <p
                        class="mt-0"
                        v-text="item.subtitle"
                    />
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>