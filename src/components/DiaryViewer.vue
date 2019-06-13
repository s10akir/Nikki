<template>
    <div class="viewer">
        <div v-for="diary in diarys" :key="diary.title">
            <OneDiary v-bind:row="diary"></OneDiary>
        </div>
    </div>
</template>

<script>
const axios = require('axios');
import OneDiary from './OneDiary.vue';

export default {

    name: 'DiaryViewer',
    data() {
        return {
        diarys: [
            {title : "タイトル１", content: "コンテンツ"},
            {title : "タイトル２", content: "コンテンツ"},
            {title : "タイトル8", content: "コンテンツ"},
            {title : "タイトル４", content: "コンテンツ"},

        ]
        }
    },
    props: {
        
    },
    components: {
        'OneDiary': OneDiary,
    },
    methods: {
    send() {
      axios.post('http://localhost:3000/post',{title: this.sendDiary.title, content: this.sendDiary.content})
      .then(function(response) {
        console.log(response.data.diarys);
      })
    },
    get() {
      axios.get('http://tatikaze.com/diarys')
    .then(response => (this.diarys = response.data.diarys));
    }
  },
  mounted () {
    this.get();
  },
  beforeUpdate () {
    this.get();
  }
}
</script>

<style>
</style>