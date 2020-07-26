<template>
  <v-card>
    <v-row justify="center">
      <v-card-title>
        Contact Page
      </v-card-title>
      <MySvg width="25" height="25" icon-name="box" iconColor="red"></MySvg>

      <p class="text-center text-wrap">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error tempora
        non aspernatur odit, quibusdam inventore quia! Iure laudantium nobis
        animi deserunt error cum ex, rem rerum ad ipsa non iusto?
      </p>
    </v-row>
  </v-card>
</template>
<script>
import MySvg from "../icons/MySvg";
export default {
  components: {
    MySvg,
  },
};
</script>
