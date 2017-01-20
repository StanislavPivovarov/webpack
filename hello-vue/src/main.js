import Vue from 'vue'
import App from './App.vue'
import Bar from './Bar.vue'
import VueRouter from 'vue-router'

const routes = [
    { path: '/', component: App },
    { path: '/bar', component: Bar }
];

// const router = new VueRouter({routes});

new Vue({
  // router,
  render: h => h(App)
}).$mount('#app');
