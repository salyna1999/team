<template>
  <v-app dark>
    <v-container>
      <p></p>
      <app-text></app-text>
      <div class="num">
        <div class="e">
          <v-btn height="100%" class="C" to="/abcdef">1</v-btn>
        </div>
        <div class="e">
          <v-btn height="100%" class="C">2</v-btn>
        </div>
        <div class="e">
          <v-btn height="100%" class="C">3</v-btn>
        </div>
        <div class="e">
          <v-btn height="100%" class="C">4</v-btn>
        </div>
        <div class="e">
          <v-btn height="100%" class="C">5</v-btn>
        </div>
        <div class="e">
          <v-btn height="100%" class="C">6</v-btn>
        </div>
        <div class="e">
          <v-btn height="100%" class="C">Space</v-btn>
        </div>
        <div class="e">
          <v-btn height="100%" class="C" to="/gazeboard">Back</v-btn>
        </div>
      </div>
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
.C:hover {
  background-color: #900c3f;
}
.num {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(50px, auto);
}
.C {
  transition-duration: 0.4s;
  padding: 32px 32px;
  width: 100%;
  height: 100%;
  border: none;
  color: white;
  margin: 15px 1px;
  font-size: 50px;
  border-radius: 50px;
}
.e {
  transition-duration: 0.4s;
  padding: 32px 32px;
  width: 100%;
  height: 100%;
  border: none;
  color: white;
  margin: 15px 1px;
  font-size: 50px;
}
</style>
