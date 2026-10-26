<template>
    <div class="bg-background">
        <v-container>
            <v-row justify="center" class="mb-6">
                <v-col cols="12" sm="3">
                    <h1 class="display-6">
                        Manejo de drones
                    </h1>
                    
                    <p>
                        Descripción de ejemplo: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
                    </p>

                    <v-divider />

                    <h5 class="h6">
                        Datos del proyecto:
                    </h5>

                    <p>
                        Ubicación:
                        <span class="font-weight-semibold">
                            Parque recreativo huayapam
                        </span>
                    </p>

                    <p>
                        Participantes:
                        <span class="font-weight-semibold">
                            Stanbrige, PeterLee-Walsh, Natalie Li, Ang Ithya, Nguta French, Tamzyn
                        </span>
                    </p>

                    <p>
                        Fecha:
                        <span class="font-weight-semibold">
                            18 de Enero del 2025
                        </span>
                    </p>
                </v-col>

                <v-col cols="12" sm="6">
                    <v-row>
                        <v-col cols="12">
                            <v-img
                                cover
                                src="/img/drone1.jpeg"
                            />
                        </v-col>

                        <v-col cols="12" md="6">
                            <v-img
                                cover
                                src="/img/drone2.jpg"
                            />
                        </v-col>
                        
                        <v-col cols="12" md="6">
                            <v-img
                                cover
                                src="/img/drone3.jpg"
                            />
                        </v-col>
                        
                        <v-col cols="12" md="6">
                            <v-img
                                cover
                                src="/img/drone4.jpeg"
                            />
                        </v-col>
                        
                        <v-col cols="12" md="6">
                            <v-img
                                cover
                                src="/img/drone5.jpeg"
                            />
                        </v-col>

                        <v-col cols="12">
                            <v-img
                                cover
                                src="/img/drone6.png.webp"
                            />
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>

            <v-divider />

            <h1 class="text-center display-6">
                Proyectos relacionados
            </h1>

            <v-row>
                <v-col cols="12" sm="6">
                    <v-hover v-slot="{ isHovering }">
                        <v-card
                            link
                            variant="flat"
                            :class="isHovering ? 'bg-primary cursor-pointer' : 'bg-primary'"
                        >
                            <v-img cover src="/img/lg01.png.webp" />
                        </v-card>
                    </v-hover>
                </v-col>
                
                <v-col cols="12" sm="6">
                    <v-hover v-slot="{ isHovering }">
                        <v-card
                            link
                            variant="flat"
                            :class="isHovering ? 'bg-primary cursor-pointer' : 'bg-primary'"
                        >
                            <v-img cover src="/img/lg02.jpeg" />
                        </v-card>
                    </v-hover>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>