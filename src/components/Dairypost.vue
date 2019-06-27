<template>
    <div class="send_form">
      <input type='text' v-model="sendDiary.title" placeholder="タイトル"></br>
      <input type='text' v-model="sendDiary.content" placeholder="コンテンツ"></br>
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
<style>
.send_form{
  position: fixed;
  bottom: 10px; 
  right: 30px;
  padding: 6px 10px;
}
</style>