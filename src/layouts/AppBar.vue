<script setup lang="ts">
import { ref } from 'vue'
import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()

const drawer = ref(false)
const options = ref([
    {
        value: '#home',
        title: 'Inicio'
    },
    {
        value: '#ligart',
        title: 'LIGART'
    },
    {
        value: '#projects',
        title: 'Proyectos'
    },
    {
        value: '#sig',
        title: 'SIG LIGART'
    },
    {
        value: '#events',
        title: 'Eventos'
    },
    {
        value: '#gallery',
        title: 'Galería'
    },
    {
        value: '#blog',
        title: 'Publicaciones'
    },
    {
        value: '#team',
        title: 'Equipo'
    },
    {
        value: '#footer',
        title: 'Contacto'
    },
])
</script>

<template>
    <v-app-bar flat color="primary" class="py-1">
        <v-spacer v-if="mobile == false" />
        
        <v-app-bar-title>
            <v-img
                :width="125"
                aspect-ratio="16/9"
                src="/img/logo_blanco.png"
            />
        </v-app-bar-title>

        <v-btn
            variant="text"
            v-text="option.title"
            v-if="mobile == false"
            v-for="option in options"
        />

        <v-spacer v-if="mobile == false" />

        <template #append v-if="mobile">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        </template>
    </v-app-bar>

    <v-navigation-drawer
        temporary
        color="primary"
        v-model="drawer"
        :location="mobile ? 'bottom' : undefined"
    >
        <v-list :items="options" />
    </v-navigation-drawer>
</template>