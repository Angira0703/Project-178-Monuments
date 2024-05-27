let latitude=22.7868542, longitude=88.3643296;

// Initializing Mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';

var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v11',
	center: [longitude, latitude],
	zoom: 4
}); 

//AMBER FORT
var img1 = document.querySelector("#amber_fort")

var marker1 = new mapboxgl.Marker({
    element: img1
})
.setLngLat([75.85133, 26.98547])
.addTo(map);

//GATEWAY OF INDIA

var img2 = document.querySelector("#gateway_of_india")

var marker2 = new mapboxgl.Marker({
    element: img2
})
.setLngLat([72.834641, 18.922064])
.addTo(map);

//INDIA GATE

var img3 = document.querySelector("#india_gate")

var marker3 = new mapboxgl.Marker({
    element: img3
})
.setLngLat([77.229446, 28.612894])
.addTo(map);

//LOTUS TEMPLE

var img4 = document.querySelector("#lotus_temple")

var marker4 = new mapboxgl.Marker({
    element: img4
})
.setLngLat([77.259132, 28.553558])
.addTo(map);

//VICTORIA MEMORIAL

var img5 = document.querySelector("#victoria_memorial")

var marker5 = new mapboxgl.Marker({
    element: img5
})
.setLngLat([88.3426, 22.5448])
.addTo(map);

map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    })
);


   