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

new Vue({
    el: "#root",
    data: {},
    methods: {}
});
