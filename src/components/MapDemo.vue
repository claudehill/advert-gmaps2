<template>
  <div class="card mt-2 mb-4">
    <h5 class="card-header text-center">Google Maps&reg; Demo</h5>
    <div class="card-body">
      <h5 class="card-title"> <span><i class="fa fa-map-marker fa-2x"></i></span> Google Maps&reg; Location Demo</h5>
      <p class="card-text">Click the button below to display your approximate global location using Google Maps.</p>

      <div v-if="latitude !== ''">
        <p class="text-muted text-center">Your approximate global coordinates are {{ latitude }} (latitude), {{ longitude }} (longitude)</p>
      </div>

      <div id="google-map" class="text-center img-fluid"></div>

      <button type="submit" class="btn btn-info btn-lg btn-block" v-on:click="geoLocation()">
        <i class="fa fa-map-marker" aria-hidden="true"></i> Show Map
      </button>
    </div>
      <div class="card-footer text-muted text-center">
    Footer text
  </div>
  </div>
</template>



<script>
//  TODO: refactor as card

export default {
  data: function() {
    return {
      latitude: "",
      longitude: "",
      msg: "",
      msgLoadMap: "Click the button below to display a map of your location",
      msgLoadErr: "An error occured. Please check your device or browser settings."
    };
  },
  methods: {
    geoLocation: function() {
      navigator.geolocation.getCurrentPosition(this.getPos, this.geoErr);
    },

    getPos: function(position) {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      this.showMap(this.latitude, this.longitude);
    },

    geoErr: function(error) {
      console.log("error occured ... ", error);
    },
    showMap: function(lat, lng) {
      const element = this.$el.querySelector("#google-map");
      const options = {
        zoom: 14,
        center: new google.maps.LatLng(lat, lng)
      };
      const map = new google.maps.Map(element, options);
      const marker = new google.maps.Marker({
        position: { lat: this.latitude, lng: this.longitude },
        map: map,
        title: "Your approximate location - as seen from Google Maps"
      });
    }
  },

  beforeMount() {
    // this.geoLocation();
  },

  mounted() {
    this.message =
      "<p style='padding-top:100px;'>" + this.msgLoadMap + "</p>";
    this.$el.querySelector("#google-map").innerHTML = this.message;
  }
};
</script>

<style scoped>
#google-map {
  width: 100%;
  min-height: 400px;
  margin: 0 auto;
  /* background: gray; */
  color: #ffffff;
  background: url('../assets/img/fallback-map1.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}

.geo-info {
  color: red;
}

button[type=submit].btn-block {
  margin-top: 2rem;
  margin-bottom: 1rem;
}



/* .loader {
  border: 16px solid #f3f3f3; 
  border-top: 16px solid #3498db; 
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
} */
</style>