/**
 * Created by pivovarov on 23.01.17.
 */
import App from './templates/App.vue'
import Bar from './templates/Secondary.vue'

export default {
    history: true,
    hashbang: false,
    routes: [
        {path: '/', component: App},
        {path: '/second', component: Bar}
    ]
}