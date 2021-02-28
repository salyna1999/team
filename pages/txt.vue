<template>
  <v-container>
    <input
      :value="input"
      class="display"
      @input="onInputChange"
      placeholder="Tap on the virtual keyboard to start"
    />
  </v-container>
</template>

<script>
export default {
  props: ["letter"],
  data() {
    return {
      current: " "
    };
  },
  methods: {
    append(letter) {
      this.current = "${this.current}${letter}";
    }
  }
};
</script>

<style>
.display {
  border: 1px;
  background-color: rgb(246, 248, 244);
  align-items: center;
  height: 70px;
  width: 100%;
  color: black;
  border-radius: 10px;
}
</style>
