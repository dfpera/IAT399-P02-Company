// Main js file contains all interactions that will be present within the page.

// Functions
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: {lat: 49.2589637, lng: -123.0648282}
  });
  // Create an array of alphabetical characters used to label the markers.
  var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  // Add some markers to the map.
  // Note: The code uses the JavaScript Array.prototype.map() method to
  // create an array of markers based on a given "locations" array.
  // The map() method here has nothing to do with the Google Maps API.
  var markers = locations.map(function(location, i) {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
      map: map
    });
  });
}
var locations = [
  {lat: 49.249510, lng: -123.104452},
  {lat: 49.278678, lng: -123.113368},
  {lat: 49.272966, lng: -123.002818}
];

// Main Loop
$(function() {
  // Menu
  var hamburgers = $('header > .icons > .hamburger');
  hamburgers.children('i').removeClass('activeIcon');
  hamburgers.parents('header').children('nav.main').hide();
  // Hamburger listener
  hamburgers.click(function(e) {
    e.preventDefault();
    $(this).children('i').toggleClass('activeIcon');
    $(this).parents('header').children('nav.main').slideToggle('slow');
  });

<<<<<<< Updated upstream
  // Search
  var search = $('header > .icons > .search');
  search.click(function(e) {
    e.preventDefault();
    $(this).addClass('activeIcon');
    $(this).children('input').show('slow');
  });
  search.blur(function() {
    $(this).removeClass('activeIcon');
    $(this).children('input').hide('slow');
  })
=======
	$('#ice-level').click(function(){
		$('#ice-leveldropdown').toggle();
	});
>>>>>>> Stashed changes


  // Old js
  document.getElementById('modal-open').onclick=function(){
    document.getElementById('modal').style.display='block';
  };
  document.getElementById('cancel').onclick=function(){
    document.getElementById('modal').style.display='none';
  };

});



