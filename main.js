/**
 * Created by marcao on 11/07/17.
 */
Vue.component('tarefa', {
    template: '<li><slot></slot></li>',
});

Vue.component('lista-tarefas', {
    template: '<div><tarefa v-for="tarefa in tarefas">{{ tarefa.descricao }}</tarefa></div>',
    data: function() {
            return {
                tarefas: [
                    {descricao: 'Ir ao Banco do Brasil'},
                    {descricao: 'Ir gravar as aulas'},
                    {descricao: 'Ir para a aula de Inglês'}
                ]
            }
    }
});

Vue.component('mensagem', {
    template: `
        <article class="message" v-show="visivel">
            <div class="message-header">
                <p>Olá Mundo pelo Bulma !!!</p>
                <button class="delete" @click="escondeMensagem()"></button>
            </div>
            <div class="message-body">
                <slot></slot>
            </div>
        </article>`,
    data: function() {
        return {
            visivel: true
        };
    },
    methods: {
        escondeMensagem: function() {
            this.visivel = false;
        }
    }
});

Vue.component('advertencia', {
    template: `
        <article class="message is-warning" v-show="visivel">
            <div class="message-header">
                <p>Olá Mundo pelo Bulma !!!</p>
                <button class="delete" @click="escondeMensagem()"></button>
            </div>
            <div class="message-body">
                <slot></slot>
            </div>
        </article>`,
    data: function() {
        return {
            visivel: true
        };
    },
    methods: {
        escondeMensagem: function() {
            this.visivel = false;
        }
    }
});

Vue.component('erro', {
    template: `
        <article class="message is-danger" v-show="visivel">
            <div class="message-header">
                <p>Olá Mundo pelo Bulma !!!</p>
                <button class="delete" @click="escondeMensagem()"></button>
            </div>
            <div class="message-body">
                <slot></slot>
            </div>
        </article>`,
    data: function() {
        return {
            visivel: true
        };
    },
    methods: {
        escondeMensagem: function() {
            this.visivel = false;
        }
    }
});

new Vue({
    el: "#root",
    data: {},
    methods: {}
});
