<template>
  <v-app dark>
    <v-container>
      <p></p>
      <v-input
        value="text"
        background-color="white"
        height="50px"
        class="inputval"
        >Text</v-input
      >
      <div class="num">
        <div class="e">
          <v-btn height="100%" class="C" to="/abcdef">7</v-btn>
        </div>
        <div class="e">
          <v-btn height="100%" class="C">8</v-btn>
        </div>
        <div class="e">
          <v-btn height="100%" class="C">9</v-btn>
        </div>
        <div class="e">
          <v-btn height="100%" class="C">0</v-btn>
        </div>
        <div class="e">
          <v-btn height="100%" class="C">$</v-btn>
        </div>
        <div class="e">
          <v-btn height="100%" class="C">#</v-btn>
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
export default {
  data() {
    return {
      characters: {
        key1: "alphabet",
        key2: "abcdef",
        key3: "ab",
        key4: "a"
      }
    };
  },
  methods: {
    showdata: function() {}
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

.inputval {
  font-size: 30px;
  color: black;
  border-radius: 20px;
}
</style>
