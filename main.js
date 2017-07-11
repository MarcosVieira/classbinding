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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
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
