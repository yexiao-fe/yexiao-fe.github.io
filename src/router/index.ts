/*************函数***************/
import { createRouter, createWebHashHistory } from 'vue-router'

/*************组件***************/
import BasicLayout from '@/layout/BasicLayout.vue'
import Page404 from '@/layout/Page404.vue'
import Home from '@/views/home/index.vue'
import ArticleMd from '@/views/article/ArticleMd.vue'

/*************动态引入组件***************/
const components = import.meta.glob('@/views/*/index.vue')
const dynamicPath = [
    { path: '/article/:id', component: ArticleMd }
]
for (const key in components) {
    const fileName = key.split('/').slice(-2)[0]
    if (fileName == 'home') continue
    dynamicPath.push({
        path: `/${fileName}`,
        component: components[key]
    })
}
console.log(dynamicPath)

const routes = [
    {
        path: '/',
        component: BasicLayout,
        children: dynamicPath,
        redirect: '/home'
    },
    { path: '/home', component: Home },
    { path: '/:catchAll(.*)', component: Page404 },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})


export default router