import Vue from 'vue';
import Router from 'vue-router';
import Login from './modules/conta/Login.vue';
import Cadastrar from './modules/conta/Cadastrar.vue';
import Administracao from './modules/core/Administracao.vue';
import Home from './modules/core/Home.vue';
import NaoEncontrado from './modules/core/NaoEncontrado.vue';
import Conta from './modules/conta/Conta.vue';
import store from './store';
import { obterInformacoesJWT } from './modules/account/_helpers/jwt';

Vue.use(Router);

const routesObject = [
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/cadastrar',
        component: Cadastrar,
    },
    {
        path: '*',
        component: NaoEncontrado,
    },
    {
        path: '/',
        component: Home,
        name: 'home',
    },
    {
        path: '/administracao',
        component: Administracao,
        redirect: '/administracao/conta',
        children: [
            {
                path: '/administracao/conta',
                component: Conta,
                name: Conta,
                meta: {
                    title: 'Conta',
                },
            },
        ],
    },
];

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routesObject,
});

router.beforeEach((to, from, next) => {
    const publicPages = [
        '/login',
        '/cadastrar',
    ];

    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('token');

    if (to.path === '/logout') {
        store.dispatch('alert/info', 'Logout realizado com sucesso.', { root: true });
        return next('/login');
    }

    if (authRequired && !loggedIn) {
        return next('/login');
    }

    try {
        obterInformacoesJWT();

        return next();
    } catch (Exception) {
        localStorage.removeItem('token');
        store.dispatch('alert/error', `Erro: ${Exception}`, { root: true });
        return next('/login');
    }
});

export default router;
