<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {onBeforeMount} from 'vue'; 
import {useRouter, useRoute } from 'vue-router';
import firebase from 'firebase';
export default {
  setup(){
    const router = useRouter();
    const route = useRoute();

    onBeforeMount(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if(!user){
          router.replace('/');
        }else if(route.path == '/' || route.path == '/register'){
          router.replace('/calibration')
        }
      })

    })

  },
  name: "App",
  components: {}

};
</script>
