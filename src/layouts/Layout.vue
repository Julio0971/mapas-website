<script setup lang="ts">
import { ref } from 'vue'
import Logos from './Logos.vue'
import AppBar from './AppBar.vue'
import Footer from './Footer.vue'
import SnackBar from './SnackBar.vue'

const showFab = ref(false)

// Show the FAB only if the page has been scrolled down more than 100 pixels
const onScroll = () => {
    showFab.value = window.scrollY > 100
}

// Programmatic smooth scroll to top
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
</script>

<template>
    <v-app v-scroll="onScroll">
        <SnackBar />

        <AppBar />

        <Logos />

        <v-fab
            app
            fixed
            color="#FAFAFE"
            :active="showFab"
            location="bottom"
            icon="fas fa-chevron-up"
            @click="scrollToTop"
        />
        
        <RouterView v-slot="{ Component }">
            <Transition name="fade" mode="out-in">
                <v-main>
                    <component :is="Component" />
                </v-main>
            </Transition>
        </RouterView>

        <Footer />
    </v-app>
</template>