<template>
  <v-app dark>
    <v-container>
      <div class="st">
        <label class="Login">Registration Page</label>
        <v-form class="contain">
          <v-text-field label="User Name" />
          <v-text-field label="Email" />
          <v-text-field label="Password" type="password" />
          <v-text-field label="Confirm Password" type="password" />
          <NuxtLink class="l" to="/">do you have account already?</NuxtLink>
          <br />
          <v-btn class="b" to="/">Sign up</v-btn>
        </v-form>
      </div>
    </v-container>

    <app-footer></app-footer>
  </v-app>
</template>

<script>
import footer from "./footer.vue";
export default {
  methods: {
    /* setup() {
      const email = ref("");
      const password = ref("");

      return {
        register,
        email,
        password
      };
    */
  },
  components: {
    "app-footer": footer
  }
};
</script>

<style lang="scss" scoped>
.b {
  background-color: #581845;
  border: none;
  color: white;
  text-align: center;
  padding: 16px 32px;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  padding-left: 50%;
  width: 50%;
  height: 25%;
}
.b:hover {
  background-color: #900c3f;
  color: black;
}
.Login {
  font-size: 30px;
  font-weight: 500;
  padding-left: 40%;
}
.contain {
  text-align: center;
  padding-left: 10%;
  width: 1000px;
  height: 900px;
  padding-top: 50px;
}
.l {
  padding-top: 40%;
}
.st {
  background-color: rgb(48, 48, 56);
  border-radius: 100px;
}
</style>
