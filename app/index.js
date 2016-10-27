import 'whatwg-fetch';

import Vue from 'vue/dist/vue';

const App = Vue.extend({

});

new App({
  el: '.app',
  data() {
    return {
      name: 'Hello from JavaScript',

      pokemon: [
        'Bulbasaur',
        'Pikachu',
        'Squerttle',
      ],
    };
  },
});
