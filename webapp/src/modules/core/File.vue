<template>
    <div id="app">
        <v-container fluid grid-list-xl>
            <v-layout wrap align-center>
                <v-flex xs12 sm4 >
                    <file-pond
                        ref="pond"
                        :max-file-size="maxFileSize"
                        max-total-file-size="10MB"
                        :accepted-file-types="acceptedFileTypes"
                        v-bind:files="file"
                        @addfile="setBase64Value"
                        @removefile="fileBase64 = ''"
                        label-idle="Clique ou arraste"
                        label-file-waiting-for-size="Calculando tamanho"
                        label-invalid-field="Arquivo(s) invalido(s)"
                        label-file-size-not-available="Tamanho não disponível"
                        label-file-loading="Carregando"
                        label-file-load-error="Erro ao carregar"
                        label-file-processing="Enviando"
                        label-file-processing-complete="Enviado"
                        label-file-processing-aborted="Envio cancelado"
                        label-file-processing-error="Erro durante o envio"
                        label-file-processing-revert-error="Erro ao reverter"
                        label-file-remove-error="Erro ao remover"
                        label-tap-to-cancel="Clique para cancelar"
                        label-tap-to-retry="Clique para tentar novamente"
                        label-tap-to-undo="Clique para desfazer"
                        label-button-remove-item="Remover"
                        label-button-abort-item="Abortar"
                        label-button-retry-item-load="Cancelar"
                        label-button-undo-item-processing="Desfazer"
                        label-button-retry-item-processing="Tentar novamente"
                        label-button-process-item="Enviar"
                        label-file-type-not-allowed="Tipo de arquivo inválido"
                        file-validate-type-label-expected-types="Esperando {allButLastType} ou {lastType}"
                        label-max-file-size-exceeded="Arquivo muito grande"
                        label-max-file-size="Tamanho máximo é {filesize}"
                        label-max-total-file-size-exceeded="Tamanho máximo excedido"
                        label-max-total-file-size="Tamanho máximo de arquivos é {filesize}"
                    />
                </v-flex>
                {{maxFileSize}}
            </v-layout>
        </v-container>

    </div>
</template>

<script>
    import vueFilePond from 'vue-filepond';

    import 'filepond/dist/filepond.min.css';

    import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';

    import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
    import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
    import FilePondPluginFileEncode from 'filepond-plugin-file-encode';
    import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';

    const FilePond = vueFilePond(
        FilePondPluginFileValidateType,
        FilePondPluginImagePreview,
        FilePondPluginFileEncode,
        FilePondPluginFileValidateSize
    );

    export default {
        name: 'Arquivo',
        props: {
            value: {
                type: String,
                default: '',
            },
            acceptedFileTypes: {
                type: Array,
                default: () => [
                    'image/png',
                    'image/jpeg',
                    'image/jpg',
                    'application/pdf',
                ],
            },
            maxFileSize: {
                type: String,
                default: '5MB',
            },
            fileValidateTypeLabelExpectedTypesMap: {
                type: Object,
                default: () => {
                    return {
                        'image/png': '.png',
                        'image/jpg': '.jpg',
                        'image/jpeg': '.jpeg',
                        'application/pdf': '.pdf'
                    }
                }
            },
            callbacks: {
                type: Object,
                default: () => {}
            }
        },
        data: function() {
            return {
                file: [],
                fileBase64: '',
            };
        },
        mounted() {
            console.log(this.callbacks)
            // Object.keys(this.callbacks).forEach(function(key,index) {
            //    console.log(key)
            // });
            // console.log(this.callbacks[0]())
            console.log(this.$refs.pond)
        },
        methods: {
            setBase64Value: function() {
                try {
                    this.fileBase64 = this.$refs.pond.getFile().getFileEncodeBase64String();
                }
                catch (Exception) {
                    this.fileBase64 = '';
                }
            }
        },
        watch: {
            fileValidateTypeLabelExpectedTypesMap(defaultMap){
                this.$refs.pond._pond.fileValidateTypeLabelExpectedTypesMap = defaultMap;
            },
            value (val) {
                this.fileBase64 = val;
            },
            fileBase64(val) {
                this.$emit('input', val);
            },
        },
        components: {
            FilePond
        },
    };
</script>
