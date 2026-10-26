import { nextTick } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const history = createWebHashHistory(import.meta.env.BASE_URL)

const routes = [
    { path: '/', component: () => import('../layouts/Layout.vue'), children: [
        { path: '/', name: 'home', component: () => import('../views/Home.vue') },
        { path: '/sig-ligart', name: 'sig-ligart', component: () => import('../views/SigLigart.vue') },
        { path: '/portfolio-single-classic', name: 'portfolio-single-classic', component: () => import('../views/PortfolioSingleClassic.vue') },
    ]},
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('../views/NotFound.vue') },
]

export const router = createRouter({ history, routes })

router.afterEach((to) => {
    const title = 'LIGART ITOAX'

    nextTick(() => document.title = to.meta && to.meta.title ? `${ to.meta.title } - ${ title }` : title)
})