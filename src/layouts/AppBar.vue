<script setup lang="ts">
import { ref } from 'vue'
import { useSectionStore } from '../store'
import { useDisplay, useGoTo } from 'vuetify'
import { useRoute, useRouter } from 'vue-router'

const goTo = useGoTo()
const route = useRoute()
const router = useRouter()
const sections_store = useSectionStore()

const { mobile } = useDisplay()

const drawer = ref(false)
const options = ref([
    {
        url: 'home',
        section: 'home',
        title: 'Inicio'
    },
    {
        section: '#ligart',
        title: 'LIGART',
    },
    {
        section: '#projects',
        title: 'Proyectos'
    },
    {
        url: 'sig-ligart',
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

const goToViewSection = (option: { section?: string, url?: string }) => {
    if (option.url && option.section == undefined) {
        router.push({ name: option.url })
    } else if (option.section && route.name != 'home') {
        sections_store.section = option.section
        router.push({ name: 'home' })
    } else if (option.section && route.name == 'home') {
        goTo(option.section, {
            duration: 500,
            offset: -175,
        })
    }
}
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
            @click="goToViewSection(option)"
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