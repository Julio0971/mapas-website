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
        section: '#ligart',
        title: 'Inicio'
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
        section: '#publications',
        title: 'Publicaciones'
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
        if (option.section != '#ligart') {
            sections_store.section = option.section
        }
        
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