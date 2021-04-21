import './bootstrap'
import Vue from 'vue';
import Vuetify from './plugins/vuetify' // vuetify.jsを読み込み
import routes from './router/index'
import store from './store' 

import ExampleComponent from './components/ExampleComponent.vue'

Vue.component('app-header', require('./components/Header.vue').default);

const app = new Vue({
    el: '#app',
    vuetify: Vuetify,
    router:routes,
    store,
    components: {
        ExampleComponent,
    }
});