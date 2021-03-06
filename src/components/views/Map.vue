<template>
  <v-card width="180vw">
    <v-container>
      <v-row justify="center" align="center">
        <v-card-title class="text-center">{{ title }}</v-card-title>
        <div data-aos="zoom-in" class="chartdiv" ref="chartdiv"></div>
        <div id="demo"></div>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";

export default {
  name: "Map",
  props: { title: { type: String, default: "Title Placeholder" } },

  data() {
    return {
      mapTooltip: "this is a test",
    };
  },
  computed: {
    geoLocation() {
      return this.$store.getters["settings/about"];
    },
  },
  methods: {
    loadGeoLocation() {
      this.$store.dispatch("user/setUserGeoLocation");
    },
  },

  mounted() {
    this.loadGeoLocation();

    // Create map instance
    var chart = am4core.create(this.$refs.chartdiv, am4maps.MapChart);

    // Set map definition
    chart.geodata = am4geodata_worldLow;

    // Set projection
    chart.projection = new am4maps.projections.Miller();

    // Create map polygon series
    var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

    // Make map load polygon (like country names) data from GeoJSON
    polygonSeries.useGeodata = true;

    // Configure series
    var polygonTemplate = polygonSeries.mapPolygons.template;

    polygonTemplate.fill = am4core.color("#74B266");
    polygonTemplate.tooltipText = "{name}: {value}";
    polygonTemplate.propertyFields.fill = "fill";
    polygonSeries.exclude = ["AQ"];
    // Create hover state and set alternative fill color
    var hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#367B25");

    let imageSeries = chart.series.push(new am4maps.MapImageSeries());
    if (this.geoLocation !== undefined && this.geoLocation !== null) {
      imageSeries.data = [
        {
          latitude: this.geoLocation.latitude,
          longitude: this.geoLocation.longitude,
          title: "You are here!",
        },
      ];
    } else {
      imageSeries.data = [
        {
          latitude: 0,
          longitude: 0,
          title: "Geolocation is not supported by this browser.",
        },
      ];
    }

    let imageSeriesTemplate = imageSeries.mapImages.template;
    let circle = imageSeriesTemplate.createChild(am4core.Circle);
    circle.radius = 4;
    circle.fill = am4core.color("#B27799");
    circle.stroke = am4core.color("#FFFFFF");
    circle.strokeWidth = 2;
    circle.nonScaling = true;
    circle.tooltipText = "{title}";

    imageSeriesTemplate.propertyFields.latitude = "latitude";
    imageSeriesTemplate.propertyFields.longitude = "longitude";
  },

  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose();
    }
  },
};
</script>
<style scoped>
.chartdiv {
  width: 100%;
  height: 500px;
}
.chartdiv:hover {
  cursor: pointer;
}
</style>
