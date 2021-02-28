import Vue from "vue";
import App from "./App.vue";
import index from "./index.vue";
import txt from "./txt.vue";

Vue.component("app-text", txt);

new Vue({
  el: "#app",
  render: h => h(index)
});
