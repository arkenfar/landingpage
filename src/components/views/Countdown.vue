<template>
  <v-card>
    <v-row justify="center" align="center">
      <v-col cols="auto">
        <v-row justify="center" align="center">
          <v-col cols="auto">
            <Bubble1>
              <v-card-text
                class="text-center font-weight-light text-decoration-underline text-xl-h1 text-lg-h2 text-md-h3 text-sm-h4 text-xs-h6"
              >
                STAY TUNED
              </v-card-text>
              <v-card-text
                class="text-center font-weight-light"
                style="margin-top: -5px"
                >Project announcement {{ tbaDate }} date coming up in ...
              </v-card-text>
            </Bubble1>
          </v-col>

          <v-col cols="12">
            <v-row>
              <v-progress-linear
                v-model="progress"
                color="red lighten-2"
                height="25"
                stream
              >
                <strong>{{ progress }}</strong>
              </v-progress-linear>
            </v-row>
            <v-row justify="center" align="center">
              <v-col
                v-for="(item, key, index) in countdown"
                :key="index"
                cols="auto"
              >
                <!-- <v-hover v-slot:default="{ hover }"> -->
                <v-card
                  data-aos="zoom-in"
                  class="mx-auto"
                  v-if="index != 0"
                  min-width="100"
                  max-height="175"
                  max-width="110"
                  :hover="true"
                  :elevation="10"
                  color="darkGrey"
                  :shaped="true"
                >
                  <v-row align="center" justify="center">
                    <v-col cols="auto">
                      <v-card-text
                        style="margin-top: -5px"
                        class="text-center font-weight-bold"
                        >{{ item }}
                      </v-card-text>
                      <v-card-text
                        class="text-center text-capitalize"
                        style="margin-top: -5px"
                        >{{ key }}</v-card-text
                      >
                    </v-col>
                  </v-row>
                </v-card>
                <!-- </v-hover> -->
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="auto">
            <v-card-text class="text-center font-weight-light">
              The project was created {{ projectCreatedDate }}.
            </v-card-text>
            <v-card-text class="text-center font-weight-light">
              In the meantime, take a look at some sneak peaks.
            </v-card-text>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
import countdown from "../../utils/countdown";
import percentageBetweenDates from "../../utils/percentageBetweenDates";
import Bubble1 from "../base/Bubble1";

export default {
  name: "Countdown",
  components: { Bubble1 },
  computed: {
    tbaDate() {
      return this.$store.getters["settings/tbaDate"];
    },
    projectCreatedDate() {
      return this.$store.getters["settings/projectCreatedDate"];
    },
    progress: {
      get() {
        return this.$store.getters["settings/countdown"];
      },
      set(value) {
        this.$store.dispatch("settings/countdown", value);
      },
    },
    countdown: {
      get() {
        return this.$store.getters["settings/percentageRemaining"];
      },
      set(value) {
        this.$store.dispatch("settings/percentageRemaining", value);
      },
    },
  },
  created() {
    setInterval(() => {
      this.countdown = countdown(this.tbaDate);
      this.progress = percentageBetweenDates(
        this.tbaDate,
        this.projectCreatedDate
      );
    }, 1000);
  },
};
</script>
