import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private authService: AuthServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  submitLogin() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.getRawValue()).subscribe(data => {
        this.authService.userInfo = data;
        this.router.navigate(["/"])
      }, error => console.log('oops', error))
    }
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
