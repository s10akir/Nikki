<template>
  <div id="app">
    <DiaryViewer />
    <DiaryPost />
  </div>
</template>

<script>
import DiaryViewer from './components/DiaryViewer.vue'
import DiaryPost from './components/Dairypost.vue'

export default {
  name: 'app',
  components: {
    DiaryViewer,
    DiaryPost,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
