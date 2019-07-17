<template>
    <v-container grid-list-xl>
        <v-layout wrap align-center>
            <v-flex xs12 sm2 offset-lg5>
                <v-card>
                    <v-img
                            src="http://vota.cultura.gov.br/wp-content/uploads/2015/08/phXLDk9_zilda-barradas.jpg"
                            height="200px"
                    >
                    </v-img>

                    <v-card-title primary-title>
                        <div>
                            <div class="headline">ZILDA BARRADAS</div>
                            <span class="grey--text">1,000 voto(s)</span>
                        </div>
                    </v-card-title>

                    <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn flat color="primary">
                            <v-icon>
                                thumb_up_alt
                            </v-icon>
                        </v-btn>
                        <v-btn flat  color="blue-grey lighten-3">
                            <v-icon>
                                thumb_down_alt
                            </v-icon>
                        </v-btn>
                        <v-spacer></v-spacer>

                    </v-card-actions>

                    <v-slide-y-transition>
                        <v-card-text>
                            <div class="pb-4">
                                <h3>
                                    Defesa do candidato
                                </h3>
                                Pelas minhas habilidades criativas e administrativas me considero apta a representar o setor da economia criativa em artes visuais mato-grossense. Sou produtora cultural, possuo senso de organização para gerir projetos. Parecerista Terceirizada da FUNARTE/FBN/SEFIC/MinC – 2010/2015 e Parecerista AD HOC do FAC/SECULT/DF 2014/2015 no segmento das artes visuais
                            </div>

                            <div v-if="show" class="pb-4">
                                <h3>
                                    Experiência
                                </h3>
                                Presidente da Associação Cuiabana Belas Artes – ACUBÁ gestão 2105 a 2019; Suplente no Colegiado de Artes Visuais junto ao Conselho Nacional de Políticas Culturais CNPC – MINC 2013 - atuando na última plenária Delegada pela cadeia produtiva de Artes Visuais por Mato Grosso para a II Conferência Nacional de Cultura 2010 Organizadora do 1º Movimento das Artes Visuais de Mato Grosso 2009

                            </div>
                            <v-btn  flat block @click="show = !show">
                                <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                            </v-btn>
                        </v-card-text>
                    </v-slide-y-transition>
                </v-card>
            </v-flex>

            <!--<v-flex xs12 sm6 >-->
                <!--<v-card>-->
                    <!--<v-list three-line>-->
                        <!--<template v-for="(item, index) in items">-->
                            <!--<v-subheader-->
                                    <!--v-if="item.header"-->
                                    <!--:key="item.header">-->
                                <!--{{ item.header }}-->
                            <!--</v-subheader>-->

                            <!--<v-divider-->
                                    <!--v-else-if="item.divider"-->
                                    <!--:key="index"-->
                                    <!--:inset="item.inset"-->
                            <!--&gt;</v-divider>-->

                            <!--<v-list-tile-->
                                    <!--v-else-->
                                    <!--:key="item.nome"-->
                                    <!--avatar>-->
                                <!--<v-list-tile-avatar>-->
                                    <!--<img :src="item.avatar">-->
                                <!--</v-list-tile-avatar>-->

                                <!--<v-list-tile-content>-->
                                    <!--<v-list-tile-title v-html="item.nome"></v-list-tile-title>-->
                                    <!--<v-list-tile-sub-title v-html="'6 de outubro de 2015'"></v-list-tile-sub-title>-->
                                    <!--<v-list-tile-sub-title v-html="item.comentario">asdasd</v-list-tile-sub-title>-->
                                <!--</v-list-tile-content>-->
                                <!--<v-list-tile-action>-->
                                    <!--<v-icon>delete</v-icon>-->
                                <!--</v-list-tile-action>-->
                            <!--</v-list-tile>-->
                        <!--</template>-->
                    <!--</v-list>-->
                <!--</v-card>-->
            <!--</v-flex>-->
        </v-layout>
    </v-container>
</template>

<script>

    export default {
        data: () => ({
            show: false,
            items: [
                { header: 'Comentários' },
                {
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                    nome: 'Pedro Philipe Alves <span class="grey--text text--lighten-1">(Candidato - Artes Visuais)</span>',
                    comentario: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
                },
                { divider: true, inset: true },
                {
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
                    nome: 'Jorge Junior <span class="grey--text text--lighten-1">(Candidato - Artes Visuais)',
                    comentario: "Wish I could come, but I'm out of town this weekend."
                },
                { divider: true, inset: true },
                {
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                    nome: 'Dalila Delattre <span class="grey--text text--lighten-1">(Candidato - Artes Visuais)',
                    comentario: "Do you have Paris recommendations? Have you ever been?"
                },
                { divider: true, inset: true },
                {
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
                    nome: 'Luana Jacobina <span class="grey--text text--lighten-1">(Candidato - Artes Visuais)',
                    comentario: "Have any ideas about what we should get Heidi for her birthday?"
                },
                { divider: true, inset: true },
                {
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
                    nome: 'Rebeca Sales <span class="grey--text text--lighten-1">(Candidato - Dança)',
                    comentario: "We should eat this: Grate, Squash, Corn, and tomatillo Tacos."
                }
            ]
        }),

    };
</script>
