<script setup lang="ts">
import AOS from 'aos'
import { onMounted } from 'vue'

onMounted(() => AOS.init({
    once: true
}))
</script>

<template>
    <RouterView v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
            <component :is="Component" />
        </Transition>
    </RouterView>
</template>