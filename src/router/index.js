import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const showPage = id => () => import('../views/ShowContent').then(m => m.default(id))

export function createRouter() {
    return new Router({
        mode: 'history',
        fallback: false,
        scrollBehavior: () => ({ y: 0 }),
        routes: [
            { path: '/lunch', component: showPage('lunch')},
            { path: '/contact-us', component: showPage('contact-us')},
            { path: '/about-us', component: showPage('about-us')},
            { path: '/', redirect: '/lunch'}
        ]
    })
}
