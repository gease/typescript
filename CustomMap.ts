import { Mappable } from "./model/Model";

export class CustomMap {
  private map: google.maps.Map;

  constructor(
    zoom: number = 5,
    center: google.maps.LatLngLiteral = { lng: 0, lat: 0 },
    div: string = "map"
  ) {
    this.map = new google.maps.Map(
      document.getElementById(div) as HTMLElement,
      {
        center,
        zoom,
      }
    );
  }

  addMarker(mappable: Mappable) {
    const marker = new google.maps.Marker({
      position: mappable.location,
      map: this.map,
      clickable: true,
    });

    const infowindow = new google.maps.InfoWindow({
      content: mappable.display(),
    });

    marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
        map: this.map,
        shouldFocus: false,
      });
    });
  }
}
