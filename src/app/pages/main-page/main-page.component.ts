import { Component, OnInit } from '@angular/core';
import { SpotsService } from 'src/app/services/spots.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private spotService: SpotsService) { }

  ngOnInit(): void {
    this.get_all_spots()
  }

  get_all_spots() {

    this.spotService.get_fav_spots().subscribe(data => {
      this.spotService.fav_spots = data;
      this.spotService.get_spots().subscribe(data => {
        this.spotService.spots.next(data);
      }, error => console.log('oops', error))
    }, error => console.log('oops', error))

  }
}
