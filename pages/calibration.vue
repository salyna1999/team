<template>
  <v-app dark>
    <v-container>
      <v-card>
        <v-card-text>
          <v-btn @click="start">Start</v-btn>
          <v-btn @click="end">End</v-btn>
        </v-card-text>
        <v-card-text>
          <p>State: <span id="state"></span></p>
          <p>Cord X: <span id="docX"></span></p>
          <p>Cord Y: <span id="docY"></span></p>
          <p>Timestamp: <span id="time"></span></p>
        </v-card-text>
      </v-card>
      <div
        id="gaze"
        style="
          position: absolute;
          display: none;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          border: solid 2px rgba(255, 255, 255, 0.2);
          box-shadow: 0 0 100px 3px rgba(125, 125, 125, 0.5);
          pointer-events: none;
          z-index: 999999;
        "
      ></div>
      <v-btn class="b" router to="/main">click to start your text</v-btn>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    state: "",
    x: "",
    y: "",
    time: ""
  }),
  methods: {
    start() {
      GazeCloudAPI.StartEyeTracking();
      GazeCloudAPI.OnResult = function(GazeData) {
        console.log("GazeData", GazeData);
        // localStorage.setItem("GazeData", GazeData);
        document.getElementById("state").innerHTML = GazeData.state;
        document.getElementById("docX").innerHTML = GazeData.docX;
        document.getElementById("docY").innerHTML = GazeData.docY;
        document.getElementById("time").innerHTML = GazeData.time;
        var x = GazeData.docX;
        var y = GazeData.docY;

        var gaze = document.getElementById("gaze");
        x -= gaze.clientWidth / 2;
        y -= gaze.clientHeight / 2;

        gaze.style.left = x + "px";
        gaze.style.top = y + "px";

        if (GazeData.state != 0) {
          if (gaze.style.display == "block") gaze.style.display = "none";
        } else {
          if (gaze.style.display == "none") gaze.style.display = "block";
        }
      };
    },
    end() {
      GazeCloudAPI.StopEyeTracking();
    },
    commit() {
      this.$store.commit("EDIT_STATE", GazeData);
    }
  }
};
</script>

<style lang="scss" scoped>
.b {
  background-color: #581845;
  border: none;
  color: white;
  text-align: center;
  font-size: 25px;
  transition-duration: 0.4s;
  width: 100%;
  height: 100%;
  margin-top: 50px;

  cursor: pointer;
}
.b:hover {
  background-color: #900c3f;
  color: black;
}
</style>
