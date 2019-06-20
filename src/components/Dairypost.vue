<template>
    <div>
    <input type='text' v-model="sendDiary.title" placeholder="タイトル">
    <input type='text' v-model="sendDiary.content" placeholder="コンテンツ">
    <button v-on:click="send">send</button>        
    </div>
</template>

<script>
//import axios from 'axios'
const axios = require('axios');

export default {
  name: 'Dairypost',
data() {

    return {
      //dataに直にkeyvalueをつくっておくれるか試してみる
      //sendDiary: this.sendDiary的なことをaxiosで書く
      diarys: [
      ],
      sendDiary: {
        title: "",
        content: ""
      }
    };
  },
  methods: {
  send() {
      axios.post('http://tatikaze.com/post',{title: this.sendDiary.title, content: this.sendDiary.content})
        .then(function(response) {
        console.log(response.data.diarys);
      })
    }
  }
}
</script>