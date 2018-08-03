import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: ''
  };
  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit() {
  }

  signInWithEmail() {
    this._authService.signIn(this.user.email, this.user.password)
       .then((res) => {
          console.log(res);
    
          this._router.navigate(['dashboard']);
       })
       .catch((err) => console.log('error: ' + err));
 }

}