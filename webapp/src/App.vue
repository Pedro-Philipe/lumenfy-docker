<template>
    <v-app>
        <barra-lateral v-model="drawer"/>

        <div>
            <v-toolbar
                    :clipped-left="clipped"
                    app
                    dark
                    color="green darken-4">
                <v-toolbar-side-icon
                        @click.stop="drawer = !drawer"/>
                <v-toolbar-title v-text="title"/>
                <notificacao-badge
                        v-show="loading"
                        v-if="status.loggedIn"/>
                <v-spacer/>
            </v-toolbar>

            <v-content v-if="this.$route.path != '/'">
                <alerta v-if="alert.message != null && alert.message_type != null"
                        :color="alert.message_type">{{ alert.message }}</alerta>
                <router-view/>
            </v-content>
            <div v-else>
                <router-view/>
            </div>

        </div>
    </v-app>
</template>

<script>

import { mapState, mapActions, mapGetters } from 'vuex';
import NotificacaoBadge from './modules/notificacao/NotificacaoBadge.vue';
import BarraLateral from './modules/core/BarraLateral.vue';
import Alerta from './modules/alert/Alerta.vue';
import Inicial from './modules/core/Inicial';

export default {
    name: 'App',
    components: {
        NotificacaoBadge,
        BarraLateral,
        Alerta,
        Inicial,
    },
    data() {
        return {
            homePage: false,
            loading: false,
            clipped: false,
            drawer: false,
            fixed: false,
            miniVariant: false,
            right: true,
            rightDrawer: false,
            title: 'Vota Cultura',
        };
    },
    computed: {
        ...mapState({
            alert: state => state.alert,
            // isLoggedIn: state => state.isLoggedIn
            // status: state => state.status
        }),
        ...mapGetters({
            status: 'account/status',
            user: 'account/user',
            accountInfo: 'account/accountInfo',
        }),
    },
    mounted() {
        this.loading = true;
    },
    methods: {
        ...mapActions({
            clearAlert: 'alert/clear',
        }),
    },
};
</script>
