/**
 * Created by marcao on 11/07/17.
 */

Vue.component('tabs', {
    template:`
        <div>
            <div class="tabs">
                <ul>
                    <li v-for="tab in tabs" :class="{'is-active': tab.isActive}">
                        <a href="#" @click="selecionaTab(tab)">{{ tab.name }}</a>
                    </li>
                </ul>
            </div>
            
            <div class="tabs-detail">
                <slot></slot>
            </div>
        </div>`,

    data: function() {
        return {
            tabs: []
        };
    },

    methods: {
        selecionaTab(tabSelecionada) {
            this.tabs.forEach(tab => tab.isActive = (tab.name == tabSelecionada.name));
        }
    },

    created: function() {
        this.tabs = this.$children;
    }
});

Vue.component('tab', {
    props: {
        name: {required: true},
        selected: {default: false}
    },

    data: function() {
      return {
          isActive: false
      };
    },

    mounted() {
        this.isActive = this.selected;
    },

    template: `
        <div v-show="isActive">
            <slot></slot>
        </div>`
});

new Vue({
    el: "#root",
    data: {},
    methods: {}
});
