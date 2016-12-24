<template lang="html">
  <div class="app">

    <div class="container">
      <div class="flex__box">
        <div class="img-switcher">
          <div class="img-switcher__title">
            <button class="btn" @click="goBack()">Back</button>
            <h1>{{ apod.title }}</h1>
            <button class="btn" @click="goForward()">Forward</button>
          </div>
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
    this.getComments();
  },
  methods: {
    getNasaData() {
      const dateFormatted = this.date.format('YYYY-MM-DD')
      fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${dateFormatted}`)
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
