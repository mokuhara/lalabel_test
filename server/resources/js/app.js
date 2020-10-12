require('./bootstrap');

import Vue from 'vue'
import Test from './components/test'

const app = new Vue({
    el: '#app',
    components: {
        Test,
    }
})
