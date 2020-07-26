<template>
  <v-card width="180vw" id="github">
    <v-container>
      <v-row justify="center" align="center">
        <v-card-title class="text-center">GitHub</v-card-title>

        <v-card-text v-for="(c) in commits" :key="c.index">{{c}}</v-card-text>

        <div class="chart" ref="chartdiv"></div>
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
    return { info: {}, commits: [] };
  },
  computed: {
    github() {
      return this.$store.getters["settings/github"];
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

  mounted() {
    axios
      .get(this.github.GET_API_URL())
      .then((res) => {
        this.info = res;
        console.log("dawdaaaaa", res.data);
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

          for (let i = 1; i < this.commits.length; i++) {
            console.log("dawdd", this.commits[i]);
            data.push({
              date: this.commits[i].author.date,
              name: "name" + i,
              value: i,
            });
          }

          chart.data = data;

          let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
          dateAxis.renderer.grid.template.location = 0;

          let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
          valueAxis.tooltip.disabled = true;
          valueAxis.renderer.minWidth = 35;

          let series = chart.series.push(new am4charts.LineSeries());
          series.dataFields.dateX = "date";
          series.dataFields.valueY = "value";

          series.tooltipText = "{valueY.value}";
          chart.cursor = new am4charts.XYCursor();

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
  height: 500px;
}
</style>