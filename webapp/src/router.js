import Vue from 'vue';
import Router from 'vue-router';
import Login from './modules/conta/Login.vue';
import Cadastrar from './modules/conta/Cadastrar.vue';
import WebSocket from './modules/websocket/WebSocket.vue';
import Administracao from './modules/core/Administracao.vue';
import InscricaoConselhoCultura from './modules/core/InscricaoConselhoCultura.vue';
import FormularioDois from './modules/core/FormularioDois.vue';
import FormularioTres from './modules/core/FormularioTres.vue';
import Inicial from './modules/core/Inicial.vue';
import Candidato from './modules/core/Candidato.vue';
import NaoEncontrado from './modules/core/NaoEncontrado.vue';
import Sobre from './modules/core/Sobre.vue';
import File from './modules/core/File.vue';
import Plataforma from './modules/plataforma/Plataforma.vue';
import Sistema from './modules/sistema/Sistema.vue';
import Conta from './modules/conta/Conta.vue';
import Mensagem from './modules/mensagem/Mensagem.vue';
import Notificacao from './modules/notificacao/Notificacao.vue';
import store from './store';

Vue.use(Router);

const routesObject = [
    {
        path: '/',
        component: Inicial,
    },
    {
        path: '/inscricao-conselho',
        component: InscricaoConselhoCultura,
        name: 'Inscrição de Conselhos de Cultura',
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/file',
        component: File,
    },
    {
        path: '/cadastrar',
        component: Cadastrar,
    },
    {
        path: '/candidato',
        component: Candidato,
    },
    {
        path: '/formulario-dois',
        component: FormularioDois,
    },
    {
        path: '/formulario-tres',
        component: FormularioTres,
    },
    {
        path: '*',
        component: NaoEncontrado,
    // redirect: '/'
    },
    {
        path: '/websocket',
        component: WebSocket,
    },
    {
        path: '/notificacao',
        component: Notificacao,
    },
    {
        path: '/sobre',
        component: Sobre,
    },
    {
        path: '/administracao',
        component: Administracao,
        redirect: '/administracao/plataforma',
        children: [
            {
                path: '/administracao/plataforma',
                component: Plataforma,
                name: Plataforma,
                meta: {
                    title: 'Plataformas',
                },
            },
            {
                path: '/administracao/sistema',
                component: Sistema,
                name: Sistema,
                meta: {
                    title: 'Sistema',
                },
            },
            {
                path: '/administracao/conta',
                component: Conta,
                name: Conta,
                meta: {
                    title: 'Conta',
                },
            },
            {
                path: '/administracao/mensagem',
                component: Mensagem,
                name: Mensagem,
                meta: {
                    title: 'Mensagem',
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
        '/formulario-dois',
        '/formulario-tres',
        '/',
    ];

    try {
        return next();
    } catch (Exception) {
        localStorage.removeItem('token');
        store.dispatch('alert/error', `Erro: ${Exception}`, { root: true });
        return next('/login');
    }
});

export default router;
