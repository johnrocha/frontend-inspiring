console.log('Yet another Hello world');

var map = null;

placesOfInterest = [
    { name: 'Charme da paulista', lat: -23.562172, lng: -46.655794 },
    { name: 'The Blue Pub', lat: -23.563112, lng: -46.650338 },
    { name: 'Veloso', lat: -23.585107, lng: -46.635219 },
    { name: 'Let\'s Beer', lat: -23.586508, lng: -46.641739 },
    { name: 'O\'Malley\'s', lat: -23.558296, lng: -46.665923 },
    { name: 'Finnegan\'s', lat: -23.559547, lng: -46.676794 },
    { name: 'Partisans', lat: -23.561049, lng: -46.682555 },
    { name: 'Morrison', lat: -23.555106, lng: -46.690883 },
    { name: 'Cão Véio', lat: -23.558130, lng: -46.679508 },
    { name: 'Cervejaria Nacional', lat: -23.564740, lng: -46.690641 },
    { name: 'Brewdog', lat: -23.561309, lng: -46.693935 },
    { name: 'Rei das Batidas', lat: -23.570613, lng: -46.705977 }
];

const customIcon = {
    path: 'M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z',
    fillColor: '#F7B217',
    fillOpacity: 0.98,
    scale: 0.98,
    strokeColor: '#666666',
    strokeWeight: 3
};

const ableIcon = {
    path: 'M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z',
    fillColor: '#fff',
    fillOpacity: 0.98,
    scale: 0.98,
    strokeColor: '#666666',
    strokeWeight: 3
};

function addMarker(marker) {
    var mytext = marker.name;
    var myinfowindow = new google.maps.InfoWindow({
        content: mytext
    });
    var marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(marker.lat, marker.lng),
        icon: customIcon,
        title: marker.name,
        infowindow: myinfowindow
    });

    google.maps.event.addListener(marker, 'click', function(){
        if(!marker.open){
            marker.infowindow.open(map,marker);
            marker.open = true;
            marker.setIcon(ableIcon);
        }
        else if(marker.infowindow){
            marker.infowindow.close(map);
            marker.open = false;
            marker.setIcon(customIcon);
        }
    });
}

function initMap() {
    var mapOptions = {
        center: new google.maps.LatLng(-23.562172, -46.655794),
        gestureHandling: 'greedy',
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP]
        },
        disableDefaultUI: true,
        scaleControl: true,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.DEFAULT,
        }

    };

    map = new google.maps.Map(document.getElementById('map'), mapOptions);

    addMarker(placesOfInterest[0]);
    for(i=0;placesOfInterest.length; i++){
        addMarker(placesOfInterest[i]);
    }
}

function myLocation(){
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(getPosition,showError);
    }
    else{
         alert("Geolocation is not supported by this browser.");
    }
}

function getPosition(position)
 { 
     UserLatitude = position.coords.latitude;
     UserLongitude = position.coords.longitude;
     showPosition(UserLatitude, UserLongitude);
 }

function showPosition(userLatitude, userLongitude){
    lat= userLatitude;
    lon= userLongitude;
    var mytext = 'You are here!';
    var myinfowindow = new google.maps.InfoWindow({
        content: mytext
    });
    var mapOptions = {
        center: new google.maps.LatLng(lat, lon),
        gestureHandling: 'greedy',
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP]
        },
        disableDefaultUI: true,
        scaleControl: true,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.DEFAULT,
        }

    };
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    var marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(lat, lon),
        icon: customIcon,
        title: 'You are here!',
        infowindow: myinfowindow
    });
    google.maps.event.addListener(marker, 'click', function(){
        if(!marker.open){
            marker.infowindow.open(map,marker);
            marker.open = true;
            marker.setIcon(ableIcon);
        }
        else if(marker.infowindow){
            marker.infowindow.close(map);
            marker.open = false;
            marker.setIcon(customIcon);
        }
    });
}

function showError(error)
 {
 switch(error.code) 
   {
   case error.PERMISSION_DENIED:
     alert("User denied the request for Geolocation.");
     break;
   case error.POSITION_UNAVAILABLE:
     alert("Location information is unavailable.")
     break;
   case error.TIMEOUT:
     alert("The request to get user location timed out.")
     break;
   case error.UNKNOWN_ERROR:
     alert("An unknown error occurred.")
     break;
   }
 }
