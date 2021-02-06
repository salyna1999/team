<template>
  <v-content>
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
  </v-content>
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
