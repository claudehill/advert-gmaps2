console.log('geo file was called')

// check for Geolocation support
// if (navigator.geolocation) {
//   console.log('Geolocation is supported!');

//   window.onload = function () {
//     var startPos;
//     var geoOptions = {
//       enableHighAccuracy: false,
//       maximumAge: 1000 * 60 * 30 // 30 minute geo timeout
//     }

//     var geoSuccess = function (position) {

//       lat = position.coords.latitude;
//       lng = position.coords.longitude;

//       document.getElementById('startLat').innerHTML = 'Latitude: ' + lat;
//       document.getElementById('startLon').innerHTML = 'Longitude: ' + lng;

//     };

//     var geoError = function (error) {
//       console.log('Error occurred. Error code: ' + error.code);
//       // error.code can be:
//       //   0: unknown error
//       //   1: permission denied
//       //   2: position unavailable (error response from location provider)
//       //   3: timed out
//     };
//     navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);
//   };

// }
// else {
//   console.log('Geolocation is not supported for this Browser/OS.');
// }


// -------  another function ??? 



// var map;
// function initMap() {
//   map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: -34.397, lng: 150.644},
//     zoom: 8
//   });
// }
// </script>
//   <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
//   async defer>



// function onPositionUpdate(position)
// {
//     var lat = position.coords.latitude;
//     var lng = position.coords.longitude;
//     // alert("Current position: " + lat + " " + lng);
// }

// if(navigator.geolocation)
//     navigator.geolocation.getCurrentPosition(onPositionUpdate);
// else
//     alert("navigator.geolocation is not available");

function doSomethingWithGeo(geo) {
  console.log(geo);

  fetch('https://maps.googleapis.com/maps/api/js?key=AIzaSyCtfv3-DHz9uaSHZt42HDrIPq0EmFZYBPM&callback=initMap')
  .then(response => {
    console.log('response was ... ', response)
  })

}

function get_location() {
  navigator.geolocation.getCurrentPosition(function (position) {

    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    document.getElementById('startLat').innerHTML = latitude;
    document.getElementById('startLon').innerHTML = longitude;

    doSomethingWithGeo([[latitude, longitude]]);
  });
}

window.onload = function () {

  get_location();


}



