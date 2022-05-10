import { Component, OnInit } from '@angular/core';
import { SpotsService } from 'src/app/services/spots.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private spotService: SpotsService) { }

  ngOnInit(): void {
    this.getSpots()
  }

  spotData:any = []
 

  getSpots() {
      this.spotService.get_spots().subscribe(data => {
        this.spotService.spots.next(data);
        this.spotData = data
      }, error => console.log('oops', error))
    
  }

}

