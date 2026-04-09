<script setup lang="ts">
import AppBar from './AppBar.vue'
</script>

<template>
    <v-app>
        <v-layout>
            <AppBar />

            <v-main>
                <RouterView v-slot="{ Component }">
                    <Transition name="fade" mode="out-in">
                        <component :is="Component" />
                    </Transition>
                </RouterView>
            </v-main>
        </v-layout>
    </v-app>
</template>