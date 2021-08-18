require('./bootstrap');

import Vue from "vue";
import App from "./components/App";


import router from "./router";
import VueRouter from "vue-router";




import { funcionesGlobales } from "./funciones.js";




Vue.prototype.$funcionesGlobales = funcionesGlobales;


Vue.use(VueRouter);



new Vue({
    el: "#app",
    components: {
        App
    },
    router
})