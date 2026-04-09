<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
    <v-app-bar flat color="primary">
        <v-app-bar-title>
            LIGART ITOAX
        </v-app-bar-title>

        <template #append>
            <v-menu>
                <template #activator="{ props }">
                    <v-btn size="small" v-bind="props" icon="fas fa-user" />
                </template>

                <v-list>
                    <v-list-item value="profile" @click="router.push({ name: 'profile' })">
                        <v-list-item-title>
                            Perfil
                        </v-list-item-title>
                    </v-list-item>

                    <v-list-item value="logout">
                        <v-list-item-title>
                            Cerrar sesión
                        </v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </template>
    </v-app-bar>
</template>