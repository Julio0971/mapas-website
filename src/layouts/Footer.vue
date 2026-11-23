<script setup lang="ts">
const data = [
    {
        icon: 'fa-brands fa-facebook',
        link: 'https://www.facebook.com/ligart.itoax.9'
    },
    {
        icon: 'fa-brands fa-youtube',
        link: 'https://www.youtube.com/@ligartitoax512/featured'
    },
    {
        icon: 'fa-solid fa-envelope',
        link: 'mailto:itoligart@gmail.com'
    }
]
</script>

<template>
    <v-theme-provider theme="dark">
        <v-footer color="bg-background">
            <v-container class="py-2">
                <v-row justify="space-between" align="center">
                    <v-col cols="12" md="6">
                        <v-btn
                            size="small"
                            :key="d.icon"
                            :href="d.link"
                            :icon="d.icon"
                            variant="plain"
                            target="_blank"
                            v-for="d in data"
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