<script setup lang="ts">
import { useGoTo } from 'vuetify'
import { nextTick, onMounted } from 'vue'
import HomeWe from '../components/Home/We.vue'
import HomeTeam from '../components/Home/Team.vue'
import { useSectionStore } from '../store/index.ts'
import HomeEvents from '../components/Home/Events.vue'
import HomeContact from '../components/Home/Contact.vue'
import HomeCarousel from '../components/Home/Carousel.vue'
import HomeProjects from '../components/Home/Projects.vue'

const goTo = useGoTo()
const sections_store = useSectionStore()

onMounted(async () => {
    await nextTick()

    if (sections_store.section) {
        goTo(sections_store.section, {
            duration: 500,
            offset: -175,
        })
    }
})
</script>

<template>
    <HomeCarousel />

    <HomeWe />

    <HomeProjects />

    <HomeEvents />

    <HomeTeam />

    <HomeContact />
</template>