<template>
  <div class="container">
    <div class="rectangle-1" id="rect">Hover Me</div>
    <div class="rectangle-2" id="dragMe">Drag Me</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dragMe: "",
      rect: ""
    };
  },
  created: function() {
    if (process.client) {
      this.myFunction();
    }
  },
  methods: {
    myFunction: function() {
      this.rect = document.getElementById("rect");
      this.dragMe = document.getElementById("dragMe");

      this.initDrag({
        element: this.dragMe,
        drag: function() {
          this.isCollapsed(this.dragMe, this.rect);
        }
      });
    },

    isCollapsed: function(dragMe, rect) {
      var object_1 = this.dragMe.getBoundingClientRect();
      var object_2 = this.rect.getBoundingClientRect();
      console.log(object_1)

      if (
        object_1.right < object_2.left + object_2.width &&
        object_1.left + object_1.width > object_2.left &&
        object_1.top < object_2.top + object_2.height &&
        object_1.top + object_1.height > object_2.top
      ) {
        rect.classList.add("collide");
        document.getElementById("dragMe").style.background = "blue";
        alert('ello')
      } else {
        rect.classList.remove("collide");
        alert('this')

      }
    },

    initDrag: function(options) {
      var element = options.element;
      var mousedown,
        mouseup,
        mousemove,
        dragStart,
        initX,
        initY,
        offsetLeft,
        offsetTop;

      function mouseMove(ev) {
        if (dragStart) {
          var newX = offsetLeft + (ev.pageX - initX);
          var newY = offsetTop + (ev.pageY - initY);

          element.style.top = newY + "px";
          element.style.left = newX + "px";

          options.drag.call();
        }
      }

      function mouseUp(ev) {
        dragStart = false;
        document.removeEventListener("mousemove", mouseMove, false);
        document.removeEventListener("mouseup", mouseUp, false);

        options.stop.call();
      }

      function mouseDown(ev) {
        initX = ev.pageX;
        initY = ev.pageY;
        dragStart = true;
        offsetLeft = element.offsetLeft;
        offsetTop = element.offsetTop;
        document.addEventListener(
          "mousemove",
          function(ev) {
            mouseMove(ev);
          },
          false
        );
        document.addEventListener(
          "mouseup",
          function(ev) {
            mouseUp(ev);
          },
          false
        );

        options.start.call();
      }

      element.addEventListener(
        "mousedown",
        function(ev) {
          mouseDown(ev);
        },
        false
      );
    }
  }
};
</script>

        <style>
container{position: relative;}
.rectangle-1{position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); background: #4CAF50; width: 180px; height: 150px; border-radius: 5px; transition: 0.3s all ease; color: #fff; text-align: center; line-height: 150px; font-size: 25px;}
.rectangle-1.collide{background: #EF5350;}
.rectangle-1:after{content:":-)"; position: absolute; bottom: -50px; left: 50%; transform: translateX(-50%);}
.rectangle-1.collide:after{content:":-("; }
.rectangle-2{position: absolute; background: #F5B041; width: 100px; height: 100px; border-radius: 5px; z-index: 10; cursor: move; transition: 0.5s box-shadow ease, 0.5s transform ease; transform: translate(0, 0); top: 40%; left: 30%; text-align: center; line-height: 100px; font-size: 17px;}
.rectangle-2.onDrag{box-shadow: 5px 5px 25px 0px rgba(0,0,0,0.2); transform: translate(-3px, -3px);}
        </style>
