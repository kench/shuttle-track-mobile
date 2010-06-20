// TODO: Implement saved initial location
var center = new google.maps.LatLng(42.73, -73.6775);
var stops_url = "http://shuttles.rpi.edu/shuttle_tracking.kml";
var west_route_url = "http://shuttles.rpi.edu/routes/1.kml";
var east_route_url = "http://shuttles.rpi.edu/routes/2.kml";
var shuttles_url = "http://shuttles.rpi.edu/positions/current.kml";
var stops_layer = null;
var west_route = null;
var east_route = null;
var shuttles = null;
var map = null;

// Call this function when the page has been loaded
function initialize()
{
  var myOptions = {
    zoom: 16,
    center: center,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
  stops_layer = new google.maps.KmlLayer(stops_url, { map: map });
  west_route = new google.maps.KmlLayer(west_route_url, { map: map });
  east_route = new google.maps.KmlLayer(east_route_url, { map: map });
  shuttles = new google.maps.KmlLayer(shuttles_url, { map: map});
  refresh_shuttles(map);
}

function refresh_shuttles(map)
{
  var cache_buster = shuttles_url + "?" + UTC();
  shuttles.setMap(null); // Remove shuttle layer.
  shuttles = null; // Dereference.
  shuttles = new google.maps.KmlLayer(cache_buster, { map: map });
}