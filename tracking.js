// TODO: Implement saved initial location
var central_campus = new google.maps.LatLng(42.73, -73.6775);

// Call this function when the page has been loaded
function initialize()
{
  var myOptions = {
    zoom: 16,
    center: central_campus,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
}

function geolocate(map)
{
  var browserSupportFlag =  new Boolean();
}