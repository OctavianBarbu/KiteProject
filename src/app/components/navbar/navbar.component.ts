import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authservice: AuthServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  public logout() {
    this.authservice.logout();
  }

  public addSpotDialog() {
    this.router.navigate(['/add-spot'])
  }
}
