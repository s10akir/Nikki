<template>
    <div class="viewer">
        <div v-for="diary in diarys" :key="diary.title" class="oneDiary">
            <OneDiary v-bind:row="diary"></OneDiary>
        </div>
    </div>
</template>

<script>
const axios = require('axios');
import OneDiary from './OneDiary.vue';
const domain = "http://tatikaze.com"

export default {

    name: 'DiaryViewer',
    data() {
        return {
        diarys: [
        ]
        }
    },
    props: {
        
    },
    components: {
        'OneDiary': OneDiary,
    },
    methods: {
      get() {
        axios.get(domain + '/diarys')
        .then(response => (this.diarys = response.data.diarys));
      },
  },
  created () {
    setInterval(() =>
      {this.get()},
      1000)
  },
}
</script>

<style>
  .oneDiary{
    max-width: 800px;
    text-align: center;
    margin: auto;
  }
</style>