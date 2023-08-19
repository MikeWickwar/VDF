import "./maps.scss"
import $ from "jquery"

export class maps {
  onLoad = () => {
    console.log("maps onload...")

    // Initialize the first map for the Las Vegas Strip with hotels
    // const mapOptions1 = {
    //   center: {lat: 36.1147, lng: -115.1728},
    //   zoom: 14,
    // };
    // const map1 = new google.maps.Map(document.getElementById('map1'), mapOptions1);
    //
    // // Search for hotels near the Las Vegas Strip and add markers to the map
    // const request1 = {
    //   location: {lat: 36.1147, lng: -115.1728},
    //   radius: '5000',
    //   type: ['lodging'],
    //   keyword: 'hotel'
    // };
    //
    // const service1 = new google.maps.places.PlacesService(map1);
    // service1.nearbySearch(request1, (results, status) => {
    //   if (status === google.maps.places.PlacesServiceStatus.OK) {
    //     for (let i = 0; i < results.length; i++) {
    //       createMarker(results[i], map1);
    //     }
    //   }
    // });

    // Initialize the second map for Downtown Las Vegas with hotels
  //   const mapOptions2 = {
  //     center: {lat: 36.1673, lng: -115.1467},
  //     zoom: 15,
  //   };
  //   const map2 = new google.maps.Map(document.getElementById('map2'), mapOptions2);
  //
  //   // Search for hotels near Downtown Las Vegas and add markers to the map
  //   const request2 = {
  //     location: {lat: 36.1673, lng: -115.1467},
  //     radius: '5000',
  //     type: ['lodging'],
  //     keyword: 'hotel'
  //   };
  //   const service2 = new google.maps.places.PlacesService(map2);
  //   service2.nearbySearch(request2, (results, status) => {
  //     if (status === google.maps.places.PlacesServiceStatus.OK) {
  //       for (let i = 0; i < results.length; i++) {
  //         createMarker(results[i], map2);
  //       }
  //     }
  //   });
  //
  //   function createMarker(place, map) {
  //     const marker = new google.maps.Marker({
  //       map: map,
  //       position: place.geometry.location
  //     });
  //
  //     const infowindow = new google.maps.InfoWindow({
  //       content: place.name
  //     });
  //
  //     marker.addListener('click', () => {
  //       infowindow.open(map, marker);
  //     });
  //   }
    }

}

const _maps = new maps();
$(document).ready(() => { _maps.onLoad()})
