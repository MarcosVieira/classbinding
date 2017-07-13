/**
 * Created by marcao on 11/07/17.
 */
Vue.component('modal', {
    template: `
        <div class="modal is-active">
          <div class="modal-background"></div>
          <div class="modal-card">
            <header class="modal-card-head">
              <p class="modal-card-title">
                <slot name="header"></slot>
              </p>
              <button class="delete" @click="$emit('meuclickfechar')"></button>
            </header>
            
            <section class="modal-card-body">
                <slot>Texto padrão apresentado se nada for definido</slot>
            </section>
            
            <footer class="modal-card-foot">
                <slot name="footer"></slot>
            </footer>
          </div>
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
