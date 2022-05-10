import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    conf_password: new FormControl('', [Validators.required])
  });

  constructor(private authService: AuthServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  submitRegister() {
    if (this.registerForm.valid && this.password?.value == this.conf_password?.value) {
      this.authService.register(this.registerForm.getRawValue()).subscribe(data => {
        this.router.navigate(["/login"])
      }, error => console.log('oops', error))
    }
  }

  get name() {
    return this.registerForm.get('name');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get username() {
    return this.registerForm.get('username');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get conf_password() {
    return this.registerForm.get('conf_password');
  }

}
