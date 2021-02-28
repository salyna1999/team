<template>
  <v-footer dark padless>
    <v-card flat tile class="indigo lighten-1 white--text text-center">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Eyes Talk will make the lives of many people around the world with such
        disabilities easier. This application once completed will have a lot of
        functionalities for these people such as writing a book, messaging a
        person, talking with a person and so on. This website will give more
        meaning to their life by giving them the gift of speech and
        communication.To bring meaningfulness and confidence into such people’s
        lives, we are developing the EyesTalk application for them to
        communicate by just using their eyes to produce text by typing and
        sending messages to whomever they would like. Once user crossing the
        process of eyes calibration, then the camera will start detecting the
        user eyes direction, so wherever users looking at , that letter only
        will be select and user just start keep on repeating looking at the
        direction of letter till they get word by word till sentence . This is
        the good solution for them. It might take time but it can upgrade their
        living to one more step .
      </v-card-text>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>EYES TALK</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"]
  })
};
</script>
