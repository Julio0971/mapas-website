<script setup lang="ts">
const icons = [
    'facebook',
    'twitter',
    'linkedin',
    'instagram',
]
</script>

<template>
    <v-theme-provider theme="dark">
        <v-footer color="bg-background">
            <v-container class="py-2">
                <v-row justify="space-between" align="center">
                    <v-col cols="12" md="6">
                        <v-btn
                            :key="icon"
                            size="small"
                            variant="plain"
                            v-for="icon in icons"
                            :icon="`fa-brands fa-${ icon }`"
                        />
                    </v-col>
                    
                    <v-col cols="12" md="6" class="d-flex justify-end">
                        <p class="my-0 text-body-medium" style="color: rgba(255, 255, 255, 0.5); ">
                            © Copyright {{ new Date().getFullYear() }}. LIGART-ITOAX
                        </p>
                    </v-col>
                </v-row>
            </v-container>
        </v-footer>
    </v-theme-provider>
</template>