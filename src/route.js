import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { path: '/', name: '', component: () => import('@/App.vue') },
    { path: '/main', name: '', component: () => import('@/pages/AppMainTemplate.vue') },

    { path: '/drag', name: '', component: () => import('@/components/file2/DragPage.vue') },
    // { path: '/sideMenu', name: '', component: () => import('@/components/file2/sideMenu.vue') },
];

3
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
