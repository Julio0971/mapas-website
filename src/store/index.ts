import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSnackbarStore = defineStore('snackbar', () => {
    const text = ref('')
    const show = ref(false)
    const type = ref('' as 'success' | 'error')

    return { show, text, type }
})

export const useSectionStore = defineStore('sections', () => {
    const section = ref('')

    const clear = () => {
        section.value = ''
    }

    return { section, clear }
})