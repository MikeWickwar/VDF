import "./hotels.css"
import $ from "jquery"

function getDetails(place_id, that){
  const service = new google.maps.places.PlacesService(document.createElement('div'));
  const request = {
    placeId: place_id,
    fields: ["name",
             "formatted_address",
             "formatted_phone_number",
             "website",
             "price_level",
             "rating",
             "photos",
             "editorial_summary"]
  };

  return service.getDetails(request, (place, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      place.photos[0].url = place.photos[0].getUrl();
      that.hotelDetails = place;
      console.log(place.name);
      console.log(place.formatted_address);
      console.log(place.formatted_phone_number);
      console.log(place.website);
      console.log(place.photos);
      console.log(place.price_level);
      console.log(place.rating);
      console.log(place.editorial_summary);
      localStorage.setItem(place_id, JSON.stringify({data: place}))
    }
  });
}

export class hotels {
  onLoad = () => {
    console.log("hotels onload...")

  }
  activate(params, routeConfig, navigationInstruction) {
    var lsHotel = localStorage.getItem(routeConfig.settings.hotelGData.place_id)

    this.hotel = routeConfig.settings.hotel;
    if (routeConfig.settings.hotel) {
      this.rooms = routeConfig.settings.hotel.rooms;
    }
    this.hotelGData = routeConfig.settings.hotelGData;
    console.log(this.hotel);
    console.log(this.hotelGData);

    if (lsHotel == null) {
      getDetails(this.hotelGData.place_id, this)
    }else{
      this.hotelDetails = JSON.parse(lsHotel).data;
      console.log( JSON.parse(lsHotel).data)
    }

  }

}

  const _hotels = new hotels();
$(document).ready(() => { _hotels.onLoad()})
