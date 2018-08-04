import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  email: FormControl;
  password: FormControl;

  createFormControls() {
    this.email = new FormControl("", [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")
    ]);
    this.password = new FormControl("", [
      Validators.required,
      Validators.minLength(8)
    ]);
  }

  createForm() {
    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password
    });
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  constructor(private _authService: AuthService, private _router: Router) { }

  signIn() {
    if (this.loginForm.valid) {
      console.log("Form Submitted!");
      console.log(this.loginForm.value);
      this._authService.signIn(this.loginForm.controls['email'].value, this.loginForm.controls['password'].value)
        .then((res) => {
          this._router.navigate(['/take-challenge']);
        })
        .catch((err) => console.log('error: ' + err));
    }
  }

  getErrorMessage(formControl: FormControl) {
    return formControl.hasError('required') ? 'You must enter a value' :
      formControl.hasError('pattern') ? 'Not a valid input' :
        '';
  }
}