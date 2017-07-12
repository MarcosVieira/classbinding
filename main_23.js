/**
 * Created by marcao on 11/07/17.
 */
Vue.component('modal', {
    template: `
    <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="box">
                <slot></slot>
            </div>
        </div>
        <button class="modal-close is-large" @click="$emit('meuclickfechar')"></button>
    </div>`
});

Vue.component('mensagem', {
    props: ['title', 'body'],

    template: `
        <article class="message" v-show="visivel">
            <div class="message-header">
                <p>{{title}}</p>
                <button class="delete" @click="escondeMensagem()"></button>
            </div>
            <div class="message-body">
                {{body}}
                <slot></slot>
            </div>
        </article>`,

    data: function () {
        return {
            visivel: true
        };
    },

    methods: {
        escondeMensagem() {
            this.visivel = false;
        }
    }
});

new Vue({
    el: "#root",
    data: {
        showModal: false
    },
    methods: {}
});
