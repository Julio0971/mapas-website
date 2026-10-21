<script setup lang="ts">
import { useSnackbarStore } from '../store'

const snackbarStore = useSnackbarStore()
</script>

<template>
    <v-snackbar
        location="right bottom"
        :color="snackbarStore.type"
        v-model="snackbarStore.show"
        :timeout="snackbarStore.type == 'success' ? 3000 : -1"
    >
        {{ snackbarStore.text }}

        <template v-slot:actions v-if="snackbarStore.type == 'error'">
            <v-btn @click="snackbarStore.show = false">
                <v-icon icon="fas fa-times" />
            </v-btn>
        </template>
    </v-snackbar>
</template>