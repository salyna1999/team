<template>
  <v-app dark>
    <v-container>
      <div class="st">
        <div id="app">
          <label class="Login">Login Page</label>
          <form class="contain" @submit.prevent="pressed">
            <v-text-field type="text" v-model="email" placeholder="Email" />
            <v-text-field
              v-model="password"
              placeholder="Password"
              type="password"
            />
            <NuxtLink class="l" to="/register"
              >do you have account yet?</NuxtLink
            >

            <br />
            <v-btn to="calibration" class="b">Login</v-btn>
            <div class="error" v-if="error"> {{error.message}} </div>
          </form>
        <div style="color='red'" class="error" v-if="error"> {{error.message}} </div>

        </div>
      </div>
    </v-container>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import firebase from "firebase/app"
import footer from "./footer.vue";
export default {
  data(){ 
    return {
      email: "",
      password: "",
      error:''
    }
  },
  methods: {
    pressed(){
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .then(data => { 
        console.log(data)
        //this.$router.push('.secret')
      }).catch(error => this.error = error)
    },
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
