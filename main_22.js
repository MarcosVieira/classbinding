/**
 * Created by marcao on 11/07/17.
 */

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

    data() {
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

Vue.component('sucesso', {
    props: ['title', 'body'],

    template: `
        <article class="message is-success" v-show="visivel">
            <div class="message-header">
                <p>{{title}}</p>
                <button class="delete" @click="escondeMensagem()"></button>
            </div>
            <div class="message-body">
                {{body}}
                <slot></slot>
            </div>
        </article>`,

    data() {
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

Vue.component('advertencia', {
    props: ['title', 'body'],

    template: `
        <article class="message is-warning" v-show="visivel">
            <div class="message-header">
                <p>{{title}}</p>
                <button class="delete" @click="escondeMensagem()"></button>
            </div>
            <div class="message-body">
                {{body}}
                <slot></slot>
            </div>
        </article>`,

    data() {
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

Vue.component('erro', {
    props: ['title', 'body'],

    template: `
        <article class="message is-danger" v-show="visivel">
            <div class="message-header">
                <p>{{title}}</p>
                <button class="delete" @click="escondeMensagem()"></button>
            </div>
            <div class="message-body">
                {{body}}
                <slot></slot>
            </div>
        </article>`,

    data() {
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
    data: {},
    methods: {}
});
