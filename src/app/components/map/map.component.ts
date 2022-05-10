import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { SpotsService } from 'src/app/services/spots.service';



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  title = "google-maps"

  private map!: google.maps.Map

  constructor(private spotService: SpotsService) { }

  ngOnInit(): void {
    let loader = new Loader({
      apiKey: 'AIzaSyAd52s8xWJqqOIPO-FCe85dM5QQT1yqsys'
    })

    loader.load().then(() => {
      const location = {
        lat: 45.9432,
        lng: 24.9668
      }

      const myLatLng = { lat: -25.363, lng: 131.044 };

      this.map = new google.maps.Map(document.getElementById('map')!, {
        center: location,
        zoom: 6
      })

      const infoWindow = new google.maps.InfoWindow();

      this.spotService.spots$.subscribe((data:any) => {
        for (const spot of data) {
          const marker = new google.maps.Marker({
            position: { lat: parseFloat(spot.lat), lng: parseFloat(spot.long)  },
            map: this.map,
            title: "Hello World!",
          });

          marker.addListener("click", () => {
            infoWindow.close();
            let latDir = ""
            let lngDir = ""
            let favoriteButton = ""

            if (spot.lat >= 0) {latDir = "N"}
            else {latDir = "S"}
            if (spot.lat >= 0) {lngDir = "E"}
            else {lngDir = "W"}
            if (spot.lat >= 0) {lngDir = "E"}
            else {lngDir = "W"}

            if (this.spotService.fav_spots.some((e: { id: number; }) => e.id == spot.id)) {
              favoriteButton = "<button id='removeBtn' type='button' (click)='this.removeFav("+spot.id+")' class='btn btn-danger'>Remove from Favourites</button>"
            }
            else {
              favoriteButton = "<button id='addBtn' type='button' (click)='this.addFav("+spot.id+")' class='btn btn-success'>Add to Favourites</button>"
            }


            let infoWindowBody = "<div style='font-size: 18px; font-weight: bold'>"+spot.name+"</div>"+
            "<div style='font-size: 16px;'>"+spot.country+"</div>"+
            "<br>"+
            "<div style='font-size: 20px;'><b>Wind Probability:</b></div>"+
            "<div style='font-size: 16px;'>"+spot.probability+"%</div>"+
            "<br>"+
            
            "<div style='font-size: 20px;'><b>Latitude:</b> </div>"+
            "<div style='font-size: 16px;'>"+spot.lat+"\xB0 "+latDir+"</div>"+
            "<br>"+
            "<div style='font-size: 20px;'><b>Longitude:</b></div>"+
            "<div style='font-size: 16px;'>"+spot.long+"\xB0 "+lngDir+"</div>"+
            "<br>"+
            "<div style='font-size: 20px;'><b>When to go:</b></div>"+
            "<div style='font-size: 16px;'>"+spot.month+"</div>"+
            "<br>" + favoriteButton
            infoWindow.setContent(infoWindowBody);
            infoWindow.open(this.map, marker);
          });
        }
      });
    })
  }

  public addFav(id:number) {
    console.log("check")
    this.spotService.addFav(id).subscribe(data => {
      console.log(data)
    }, error => console.log('oops', error))
  }

  public removeFav(id:number) {
    this.spotService.removeFav(id).subscribe(data => {
    }, error => console.log('oops', error))
  }
}

