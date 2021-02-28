<template>
  <v-app dark>
    <v-container>
      <p v-on:mouseover='GazeCloudAPI.StartEyeTracking()'></p>
            <div class="c" 
        
        id="gaze"
        style="
          position: absolute;
          display: none;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          border: solid 2px rgba(255, 255, 255, 0.2);
          box-shadow: 0 0 100px 3px rgba(125, 125, 125, 0.5);
          pointer-events: painted;
          z-index: 999999;
        "
      ></div>
      <v-btn height="150%" class="c" to="/gazeboard">Visual Aided Speech</v-btn>
      <v-btn height="150%" class="c" to="/messages">Message</v-btn>
    </v-container>
  </v-app>
</template>

<script>
import GazeData from './calibration.vue'
export default {
  methods:{
    
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
  margin: 10px 2px;
  transition-duration: 0.4s;
  width: 100%;
  height: 100%;
  border-radius: 100px;
}
</style>
