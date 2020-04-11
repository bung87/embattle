import App from './App.vue';
import Vue from "vue";
import VueRouter from 'vue-router';
import routes from './routes';

const router = new VueRouter({
    mode: "history",
    routes
});

Vue.use(VueRouter)

const layout = {
   default :() => ({
    left: {
        width: "100px"
    },
    right: {
        width: "200px"
    }
   })
};

new Vue(
    {
        props: {
            layout
        },
        router,
        el: '#app',
        render: (h) => h(App)
    }
);