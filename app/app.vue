<template lang="html">
  <div class="app">

    <div class="container">
      <div class="img-switcher__title"><h1>{{ apod.title }}</h1></div>
      <div class="flex__box">

        <button class="btn" @click="goBack()">Back</button>
        <div class="img-switcher">
          <div class="frame">
            <img :src="apod.url" :alt="apod.title"/>
          </div>
        </div>
        <button class="btn" @click="goForward()">Forward</button>

      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import moment from 'moment';

const apiKey = process.env.API_KEY;
export default Vue.extend({

  data() {
    return {
      date: moment(),
      apod: {},
      comments: [],
      form: {
        author: 'derrick'
      },
    };
  },

  mounted() {
    this.getNasaData();
  },
  methods: {
    getNasaData() {
      const dateFormatted = this.date.format('YYYY-MM-DD')
      fetch(`https://api.nasa.gov/planetary/apod?api_key=zdQkgsMWDn7jka4uq0K0MbAGoZAyhTjI8kTjYpil&date=${dateFormatted}`)
        .then((r) => r.json())
        .then((data) => {
          this.apod = data;
        });
    },
    goBack() {
      this.date.subtract(1, 'days');
      this.getNasaData();
    },
    goForward() {
      this.date.add(1, 'days');
      this.getNasaData();
    },
  }

});
</script>
