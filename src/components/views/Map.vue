<template>
  <v-card width="180vw">
    <v-container>
      <v-row justify="center" align="center">
        <v-card-title class="text-center">Our location</v-card-title>
        <div data-aos="zoom-in" class="hello" ref="chartdiv"></div>
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
  data() {
    return {};
  },
  computed: {},
  mounted() {
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

    polygonSeries.data = [
      {
        id: "US",
        name: "United States of Assholes",
        value: 150,
        fill: am4core.color("#F05C5C"),
      },
      {
        id: "FR",
        name: "France",
        value: 50,
        fill: am4core.color("#5C5CFF"),
      },
    ];
    polygonTemplate.tooltipText = "{name}: {value}";
    polygonTemplate.propertyFields.fill = "fill";
    polygonSeries.exclude = ["AQ"];
    // Create hover state and set alternative fill color
    var hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#367B25");

    let imageSeries = chart.series.push(new am4maps.MapImageSeries());
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

    imageSeries.data = [
      {
        latitude: 48.856614,
        longitude: 2.352222,
        title: "Paris",
      },
      {
        latitude: 40.712775,
        longitude: -74.005973,
        title: "New York",
      },
      {
        latitude: 49.282729,
        longitude: -123.120738,
        title: "Vancouver",
      },
      {
        latitude: 59.89990400000001,
        longitude: 10.770841599999999,
        title: "You are here",
      },
    ];
    navigator.geolocation.getCurrentPosition((geoLoc) => {
      console.log("geo location: ", geoLoc);
    });

    var x = document.getElementById("demo");

    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
      }
    }

    function showPosition(position) {
      x.innerHTML =
        "Latitude: " +
        position.coords.latitude +
        "<br>Longitude: " +
        position.coords.longitude;
    }
    getLocation();
  },

  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose();
    }
  },
};
</script>
<style scoped>
.hello {
  width: 100%;
  height: 500px;
}
</style>
