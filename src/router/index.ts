/*************函数***************/
import { createRouter, createWebHashHistory } from 'vue-router'
import { camelToString } from '@/utils'

/*************组件***************/
import BasicLayout from '@/layout/BasicLayout.vue'
import Page404 from '@/layout/Page404.vue'

/*************动态引入组件***************/
const components = import.meta.glob('@/views/*.vue')
const dynamicPath = []
for (const key in components) {
    const fileName = key.split('/').slice(-1)[0].split('.')[0]
    if (fileName[0] !== 'V') continue
    const path = camelToString(fileName.slice(1), '/')
    dynamicPath.push({
        path: `/${path}`,
        component: components[key]
    })
}
console.log(dynamicPath)

const routes = [
    {
        path: '/',
        component: BasicLayout,
        children: dynamicPath,
    },
    { path: '/:catchAll(.*)', component: Page404 },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})


export default router