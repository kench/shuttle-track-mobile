// TODO: Implement saved initial location
var central_campus = new google.maps.LatLng(42.73, -73.6775);
var stops_url = "http://shuttles.rpi.edu/shuttle_tracking.kml";
var west_route_url = "http://shuttles.rpi.edu/routes/1.kml";
var east_route_url = "http://shuttles.rpi.edu/routes/2.kml";
var shuttles_url = "http://shuttles.rpi.edu/positions/current.kml";
var stops_layer = null;
var west_route = null;
var east_route = null;
var shuttles = null;

// Call this function when the page has been loaded
function initialize()
{
  var myOptions = {
    zoom: 16,
    center: central_campus,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
  stops_layer = new google.maps.KmlLayer(stops_url, { map: map });
  west_route = new google.maps.KmlLayer(west_route_url, { map: map });
  east_route = new google.maps.KmlLayer(east_route_url, { map: map });
  shuttles = new google.maps.KmlLayer(shuttles_url, { map: map});
}

function geolocate(map)
{
  var browserSupportFlag =  new Boolean();
}
