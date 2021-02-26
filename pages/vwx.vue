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
      <v-btn height="100%" class="c">v</v-btn>
      <v-btn height="100%" class="c" to="/wx">wx</v-btn>

      <v-btn height="100%" class="c">space</v-btn>
      <v-btn height="100%" class="c" to="/gazeboard">back</v-btn>
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

.inputval {
  font-size: 30px;
  color: black;
  border-radius: 20px;
}
</style>
