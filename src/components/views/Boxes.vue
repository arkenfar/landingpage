<template>
  <v-card width="180vw">
    <v-container>
      <Parallax
        src="https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        height="200"
      >
        <v-row justify="space-between" align="center">
          <v-col v-for="(color, key, index) in colors" :key="index" cols="auto">
            <v-sheet
              data-aos="zoom-in"
              :width="width"
              :height="height"
              :elevation="elevation"
              :color="color"
              :tile="tile"
            >
              <div>{{ msg }}</div>
            </v-sheet>
          </v-col>
        </v-row>
      </Parallax>
    </v-container>
  </v-card>
</template>
<script>
import Parallax from "../base/Parallax";
export default {
  name: "Boxes",
  components: { Parallax },
  data() {
    return {
      msg: "hello world",
      width: 100,
      height: 100,
      elevation: 4,
      colors: [
        "white",
        "gray darken-2",
        "warning",
        "error",
        "success",
        "teal",
        "yellow",
        "blue",
        "orange",
      ],
      color: "white",
      tile: false,
    };
  },
  computed: {
    boxes() {
      return ["one", "two", "three", "four", "five"];
    },
  },
};
</script>
