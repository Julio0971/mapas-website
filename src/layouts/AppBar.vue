<script setup lang="ts">
import { ref } from 'vue'
import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()

const drawer = ref(false)
const options = ref([
    {
        url: 'home',
        title: 'Inicio'
    },
    {
        url: 'ligart',
        title: 'LIGART',
    },
    {
        section: '#projects',
        title: 'Proyectos'
    },
    {
        section: '#sig',
        title: 'SIG LIGART'
    },
    {
        section: '#events',
        title: 'Eventos'
    },
    {
        section: '#gallery',
        title: 'Galería'
    },
    {
        section: '#blog',
        title: 'Publicaciones'
    },
    {
        section: '#team',
        title: 'Equipo'
    },
    {
        section: '#footer',
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
            size="large"
            variant="text"
            v-text="option.title"
            v-if="mobile == false"
            v-for="option in options"
            :to="option.url ? { name: option.url } : undefined"
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