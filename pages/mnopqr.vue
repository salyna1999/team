<template>
  <v-app dark>
    <v-container>
      <p></p>
      <app-text></app-text>
      <v-btn height="100%" class="c" to="/mn">mn</v-btn>
      <v-btn height="100%" class="c" to="/op">op</v-btn>

      <v-btn height="100%" class="c" to="/qr">qr</v-btn>
      <v-btn height="100%" class="c" to="/gazeboard">back</v-btn>
    </v-container>
  </v-app>
</template>

<script>
import txt from "./txt.vue";
export default {
  components: {
    "app-text": txt
  }
};
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
  border-radius: 50px;
}
</style>
