<template>
  <v-app dark>
    <v-container>
      <v-card>
        <v-card-text>
          <v-btn id="hello" @click="start">Start</v-btn>
          <v-btn @click="end">End</v-btn>
        </v-card-text>
        <v-card-text v-on:load="CheckDiv()">
          <p>State: <span id="state"></span></p>
          <p>Cord X: <span id="docX"></span></p>
          <p>Cord Y: <span id="docY"></span></p>
          <p>Timestamp: <span id="time"></span></p>
          <v-btn> Assign to mouse </v-btn>
        </v-card-text>
      </v-card>
      <div
        class="c"
        ref="gaze"
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

      <v-btn
        id="hoverbutton"
        ref="hoverbutton"
        height="60%"
        class="b"
        to="/main"
        >Look here to Click this Button</v-btn
      >
    </v-container>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    state: "",
    x: "",
    y: "",
    time: "",
    object_1: "",
    object_2: ""
  }),
  //  created() {
  //    this.isCollapsed()
  //window.addEventListener('load', this.collidesWith())
  //},

  methods: {
    /*isCollapsed:function(dragMe, rect){
  dragMe = this.$refs.gaze
  rect = this.$refs.hoverbutton
  this.object_1 = this.$refs['gaze'].getBoundingClientRect().x
  this.object_2 = this.$refs[rect].getBoundingClientRect().x
  
  if (object_1.left < object_2.left + object_2.width  && object_1.left + object_1.width  > object_2.left &&
		object_1.top < object_2.top + object_2.height && object_1.top + object_1.height > object_2.top) {
    rect.classList.add("collide");
    alert('hello')
  }
  else{
    rect.classList.remove("collide");
  }
},*/

    alertbox() {
      var ideal;
      document.onmouseover = resetTimer;
      document.onmouseout = retTimer;

      function showmsg() {
        document.getElementById("hoverbutton").click(); // Click on the checkbox
      }

      function retTimer() {
        clearTimeout(ideal);
      }

      function resetTimer() {
        clearTimeout(ideal);
        ideal = setTimeout(showmsg, 2000);
      }
      window.onload = resetTimer;
    },
    start() {
      GazeCloudAPI.StartEyeTracking();
      GazeCloudAPI.OnResult = function(GazeData) {
        console.log("GazeData", GazeData);
        //  localStorage.setItem("GazeData", GazeData);
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
      clientX = x;
      clientY = y;
    }
  }
};
</script>

<style lang="scss" scoped>
.b {
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

.c {
  background-color: #00ff00;
  border: none;
  color: white;
  text-align: center;
  padding: 16px 32px;
  font-size: 50px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  padding-left: 0%;
  width: 100%;
  max-height: 60%;
  height: 60%;
  margin-top: 10px;
}
.c:hover {
  background-color: #900c3f;
  color: black;
}

div.c:hover ~ .b {
  background-color: #0514e6;
  color: black;
}
</style>
