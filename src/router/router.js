import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Home from '../components/Home.vue';
import News from '../components/News.vue';

const routes = [
    { path: '/home', component: Home },
    { path: '/news', component: News },
    { path: '*', redirect: '/home' }   /*默认跳转路由*/
];

const router = new VueRouter({
    mode: 'history', 
    routes
});

export default router;