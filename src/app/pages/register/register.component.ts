import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  email: FormControl;
  password: FormControl;
  fullName: FormControl;
  baseLocation: FormControl;
  edcClientProject: FormControl;
  partOfProgram: FormControl;

  createFormControls() {
    this.email = new FormControl("sdurgeshs@gmail.com", [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")
    ]);
    this.password = new FormControl("12341234", [
      Validators.required,
      Validators.minLength(8)
    ]);
    this.fullName = new FormControl("Durgesh Sharma", Validators.required);
    this.baseLocation = new FormControl("Mumbai", Validators.required);
    this.edcClientProject = new FormControl("DeBeers", Validators.required);
    this.partOfProgram = new FormControl("Development", Validators.required);
  }

  createForm() {
    this.registerForm = new FormGroup({
      email: this.email,
      password: this.password,
      fullName: this.fullName,
      baseLocation: this.baseLocation,
      edcClientProject: this.edcClientProject,
      partOfProgram: this.partOfProgram,
    });
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  constructor(private _authService: AuthService, private _router: Router) { }

  signUp() {
    if (this.registerForm.valid) {
      console.log("Form Submitted!");
      console.log(this.registerForm.value);
      this._authService.signUp(this.registerForm.controls['email'].value, this.registerForm.controls['password'].value)
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
