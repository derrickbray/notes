<template lang="html">
  <div class="app">

    <div class="container">
      <div class="title-flex">
        <div class="nasa">
          <img src="nasa-logo-black.png" alt="" />
        </div>
        <h1 class="nasa__title">You Found It!  Nasa's Picture of the Day</h1>
      </div>

      <div class="flex">
        <button class="btn" @click="goBack()"><i class="fa fa-angle-left fa-4x" aria-hidden="true"></i></button>
        <div class="img-switcher__title"><h1>{{ apod.title }}</h1></div>
        <button class="btn" @click="goForward()"><i class="fa fa-angle-right fa-4x" aria-hidden="true"></i></button>
      </div>

      <div class="flex">
        <div class="img-switcher">
          <div class="frame">
            <img :src="apod.url" :alt="apod.title"/>
          </div>
        </div>

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
