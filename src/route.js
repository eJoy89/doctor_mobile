import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { path: '/', name: '', component: () => import('@/components/DragPage.vue') },
    { path: '/sideMenu', name: '', component: () => import('@/components/sideMenu.vue') },
];


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
