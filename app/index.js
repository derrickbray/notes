import 'whatwg-fetch';

import Vue from 'vue/dist/vue';

const App = Vue.extend({

});

new App({
  el: '.app',
  data() {
    const model = {
      name: 'Hello from JavaScript',

      pokemon: [
        'Bulbasaur',
        'Pikachu',
        'Squerttle',
        'tom',
        'dick',
        'harry',
      ],
    };
    setTimeout(() => {
      alert('Charmander is evolving!!!');

      this.pokemon = this.pokemon.map((p) => {
        if (p === 'Pikachu') {
          return 'Pikapoo';
        }
        return p;
      });
    }, 5000);
    return model;
  },
});
