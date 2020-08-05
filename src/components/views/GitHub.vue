<template>
  <v-card width="100vw" id="github">
    <v-container>
      <v-row justify="center" align="center">
        <v-card-title class="text-center" data-aos="zoom-in">Latest GitHub commitments</v-card-title>
        <div class="mt-5 chart" ref="chartdiv"></div>
      </v-row>
      <v-row justify="center" align="center">
        <v-col cols="auto" xs="12">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                :icon="true"
                id="githubIconBtn"
                x-large
                v-bind="attrs"
                v-on="on"
                v-on:click="openGithubUserUrl()"
                :dark="darkMode"
                data-aos="zoom-in"
              >
                <v-icon x-large>mdi-github</v-icon>
              </v-btn>
            </template>
            <span>
              Open Github user page in a new tab
              <br />
              ---->
              {{ githubUserUrl }}
            </span>
          </v-tooltip>
        </v-col>
        <v-col cols="auto" xs="12">
          <v-card-subtitle class="text-center">Description: {{ githubDescription }}</v-card-subtitle>
          <v-card-subtitle class="text-center">
            Made by:
            <span class="text-capitalize">{{ github.user }}</span>
          </v-card-subtitle>
        </v-col>
        <v-col cols="auto" xs="12">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                :icon="true"
                id="githubIconBtn"
                x-large
                v-bind="attrs"
                v-on="on"
                v-on:click="openGithubRepoUrl()"
                :dark="darkMode"
                data-aos="zoom-in"
              >
                <v-icon x-large>mdi-github</v-icon>
              </v-btn>
            </template>
            <span>
              Open Github repository in a new tab
              <br />
              ----> {{ githubRepoUrl }}
            </span>
          </v-tooltip>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
import axios from "axios";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

export default {
  name: "GitHub",
  data() {
    return { commits: [] };
  },
  computed: {
    github() {
      return this.$store.getters["settings/github"];
    },
    githubDescription() {
      return this.utils.capitalizeFirstLetter(this.github.description);
    },
    githubUserUrl() {
      return this.github.GET_USER_URL();
    },
    githubRepoUrl() {
      return this.github.GET_REPO_URL();
    },
    utils() {
      return this.$store.getters["settings/utils"];
    },
    color() {
      return this.$store.getters["settings/color"];
    },
    darkMode: {
      get() {
        return this.$store.getters["settings/darkMode"];
      },
      set(value) {
        this.$store.dispatch("settings/darkMode", value);
      },
    },
    error: {
      get() {
        return this.$store.getters["error/error"];
      },
      set(value) {
        this.$store.dispatch("error/setError", value);
      },
    },
  },
  methods: {
    openGithubUserUrl() {
      let href = this.githubUserUrl;
      window.open(href, "_blank");
    },
    openGithubRepoUrl() {
      let href = this.githubRepoUrl;
      window.open(href, "_blank");
    },
  },
  mounted() {
    axios
      .get(this.github.GET_API_REPO_URL())
      .then((res) => {
        this.github.description = res.data.description;
      })
      .catch((err) => {
        this.error = "Failed to connect to github api:" + err;
      });

    axios
      .get(this.github.GET_API_COMMITS_URL())
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        for (let i = 0; i < data.length; i++) {
          const e = data[i].commit;
          this.commits.push(e);
        }
      })
      .then(() => {
        if (this.commits.length >= 1) {
          let chart = am4core.create(this.$refs.chartdiv, am4charts.XYChart);

          chart.paddingRight = 20;

          let data = [];
          let commits = this.commits.length;
          for (let i = 0; i < this.commits.length; i++) {
            commits -= 1;

            data.push({
              date: this.commits[i].author.date,
              name: "Author: " + this.commits[i].author.name,
              comment: "Comment: " + this.commits[i].message,
              value: commits,
            });
          }

          chart.data = data;

          let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
          dateAxis.renderer.grid.template.location = 0;
          dateAxis.renderer.labels.template.fill = am4core.color(
            this.color.primary
          );

          let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
          valueAxis.tooltip.disabled = true;
          valueAxis.renderer.minWidth = 35;
          valueAxis.renderer.labels.template.fill = am4core.color(
            this.color.primary
          );

          let series = chart.series.push(new am4charts.LineSeries());
          series.stroke = am4core.color(this.color.primary);
          series.strokeWidth = 3;
          series.dataFields.dateX = "date";
          series.fill = am4core.color("#333");
          series.dataFields.valueY = "value";

          series.name = "Commits";
          series.tooltipText = "[bold]{name}[/] \n [bold]{comment}[/] ";

          series.bullets.push(new am4charts.CircleBullet());
          series.connect = false;

          chart.cursor = new am4charts.XYCursor();
          chart.background.fill = "#CCCCCCFF";
          chart.background.opacity = 1;
          let scrollbarX = new am4charts.XYChartScrollbar();
          scrollbarX.series.push(series);
          chart.scrollbarX = scrollbarX;

          this.chart = chart;
        } else {
          this.error = "Failed to connect to github api";
        }
      });
  },
  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose();
    }
  },
};
</script>
<style scoped>
.chart {
  width: 100%;
  height: 300px;
}

#githubIconBtn:hover {
  color: var(--v-primary-base);
}
</style>
