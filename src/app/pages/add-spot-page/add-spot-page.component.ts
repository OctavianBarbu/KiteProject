import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-spot-page',
  templateUrl: './add-spot-page.component.html',
  styleUrls: ['./add-spot-page.component.css']
})
export class AddSpotPageComponent implements OnInit {


  constructor(private router: Router) {}

  ngOnInit(): void {
  }


}
