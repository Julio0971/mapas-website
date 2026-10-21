import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSectionStore = defineStore('sections', () => {
    const section = ref('')

    const clear = () => {
        section.value = ''
    }

    return { section, clear }
})