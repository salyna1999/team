<template>
  <v-app dark>
    <v-container>
<<<<<<< Updated upstream
      <label class="Login">Registration Page</label>
      <v-form class="contain" @submit.prevent="register">
        <v-text-field type="text"  v-model="userName" label="User Name" />
        <v-text-field type="email" v-model="email" label="Email" />
        <v-text-field
          v-model="password"
          label="Password"
          type="password"
        />
        <v-text-field
          v-model="registrationPassword"
          label="Confirm Password"
          type="password"
        />
        <NuxtLink class="l" to="/">do you have account already?</NuxtLink>
        <br />
        <v-btn class="b" to="/">Sign up</v-btn>
      </v-form>
=======
      <div class="st">
        <label class="Login">Registration Page</label>
        <v-form class="contain">
          <v-text-field v-model="loginfor.User_Name" label="User Name" />
          <v-text-field v-model="loginfor.email" label="Email" />
          <v-text-field
            v-model="loginfor.password"
            label="Password"
            type="password"
          />
          <v-text-field
            v-model="loginfor.Confirm_password"
            label="Confirm Password"
            type="password"
          />
          <NuxtLink class="l" to="/">do you have account already?</NuxtLink>
          <br />
          <v-btn class="b" to="/">Sign up</v-btn>
        </v-form>
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
  setup(){
    const email = ref('');
    const password = ref('');


    return {
      register,
      email,
      password
    }
<<<<<<< Updated upstream
   }

}
=======
  },
  components: {
    "app-footer": footer
  }
};
>>>>>>> Stashed changes
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
