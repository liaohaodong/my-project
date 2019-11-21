import Vue from 'vue'
// import VueRouter from 'vue-router'
// import Home from './views/Home.vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes:[
        {
            path: '/',
            redirect:'home'
        },
        {
            path: '/home',
            // name: 'home',
            component: () => import(/* webpackChunkName: "home" */ './views/Home.vue'),
          
          },
        {
            path: '/hot',
            name: 'hot',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "hot" */ './views/Hot.vue')
        },
        {
            path: '/server',
            name: 'server',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "server" */ './views/server.vue')
        },
        {
            path: '/share',
            name: 'share',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "share" */ './views/share.vue')
        }
    ],
    linkActiveClass: "mui‐active"
})

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}