<template>
  <v-app dark>
    <v-container id = 'app'>
      <p>{{text1}}</p>
      <v-input value="text" background-color="white" height="50px" class='inputval'>Text</v-input>
      <v-btn height="100%" v-on:click="changetext" class="c">{{text1}}</v-btn>
      <v-btn height="100%" class="c">Words</v-btn>

      <v-btn height="100%" class="c">Symbols</v-btn>
      <v-btn height="100%" class="c">Emojis</v-btn>
    </v-container>
  </v-app>
</template>

<script>
export default {
    el:'#app',
    data:{
        text1: 'Alphabets'},
    methods: {
        changetext:function(){
            this.text1 = '12311'
        }
     
        }

    }
    


</script>
<style lang="scss" scoped>
.c:hover {
  background-color: #900c3f;
  color: black;
}

.c {
  background-color: #581845;
  border: none;
  color: white;
  text-align: center;
  padding: 16px 32px;
  font-size: 50px;
  font-style: bold;
  margin: 10px 10px;
  transition-duration: 0.4s;
  width: 48%;
  height: 100%;
}

.inputval{
    font-size: 30px;
    color:black;
    border-radius: 20px;
}
</style>
