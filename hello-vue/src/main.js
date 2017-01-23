import Vue from 'vue'

import VueRouter from 'vue-router'
import routes from './components/routes'

const routerInstance = new VueRouter(routes);
Vue.use(VueRouter);

new Vue({
    router: routerInstance,
}).$mount('#app');
