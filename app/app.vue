<template lang="html">
  <div class="app">

<div class="container">
  <div class="flex__box">
    <div class="comments">
      <form class="comments__name" @submit.prevent="saveComment(form.author, form.body)">
        <input class="comments__text" type="text" name="name" v-model="form.author" placeholder="Name">
        <textarea rows="8" cols="40" v-model="form.body" placeholder="Comments"></textarea>
        <button class="btn">Comment</button>
      </form>
      <ul>
        <li v-for="comment in comments">
          <p class="comment-author">{{ comment.author }} - {{ comment.date }}</p>
          <p>{{ comment.body }}</p>
        </li>
      </ul>
    </div>
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
  getComments() {
    fetch(`http://tiny-tn.herokuapp.com/collections/nasa-comments?limit=10`)
    .then((r) =>r.json())
    .then((data)=> {
      this.comments = data;
    });
  },
  getNasaData() {
    const dateFormatted = this.date.format('YYYY-MM-DD')
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${dateFormatted}`)
    .then((r) =>r.json())
    .then((data)=> {
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
  saveComment(author, body) {
    fetch(`http://tiny-tn.herokuapp.com/collections/nasa-comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({author, body, date: this.date.format('YYYY-MM-DD')}),
    })
    .then(r => r.json())
    .then((comment) => {
      this.comments = [comment, ...this.comments];
    });

    this.form = {
      author: '',
      body: '',
    }
  }
}

});
</script>
