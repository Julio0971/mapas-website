<script setup lang="ts">
import Logos from './Logos.vue'
import AppBar from './AppBar.vue'
import Footer from './Footer.vue'
import SnackBar from './SnackBar.vue'
</script>

<template>
    <v-app>
        <SnackBar />

        <AppBar />

        <Logos />
        
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