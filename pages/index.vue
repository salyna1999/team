<template>
  <v-app dark>
    <v-container>
<<<<<<< Updated upstream
      <label class="Login">Login Page</label>

      <v-form @submit.prevent='Login' class="contain">
        <v-text-field v-model="loginfor.email" label="Email" />
        <v-text-field
          v-model="loginfor.password"
          label="Password"
          type="password"
        />
        <NuxtLink to="/register" class="l">do you have account yet?</NuxtLink>

        <br />
        <v-btn type="submit" value="Login" class="b" to="/calibration">Login</v-btn>
      </v-form>
=======
      <div class="st">
        <div id="app">
          <label class="Login">Login Page</label>
          <v-form class="contain">
            <v-text-field v-model="loginfor.email" label="Email" />
            <v-text-field
              v-model="loginfor.password"
              label="Password"
              type="password"
            />
            <NuxtLink to="/register" class="l"
              >do you have account yet?</NuxtLink
            >

            <br />
            <v-btn class="b" to="/calibration">Login</v-btn>
          </v-form>
        </div>
      </div>
>>>>>>> Stashed changes
    </v-container>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
<<<<<<< Updated upstream

=======
import footer from "./footer.vue";
>>>>>>> Stashed changes
export default {

  data: () => ({
    loginfor: {
      email: "",
      password: " "
    }
  }),
  methods: {
<<<<<<< Updated upstream

=======
    loginUser() {
      this.$store.dispatch("loginUser", this.loginfor);
    }
  },
  components: {
    "app-footer": footer
>>>>>>> Stashed changes
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
  height: 20%;
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
