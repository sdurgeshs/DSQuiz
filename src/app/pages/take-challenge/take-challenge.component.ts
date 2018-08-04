import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-take-challenge',
  templateUrl: './take-challenge.component.html',
  styleUrls: ['./take-challenge.component.css']
})
export class TakeChallengeComponent implements OnInit {

  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit() {
  }

  logout(){
    this._authService.logOut().then((res) => {
      this._router.navigate(['/login']);
    })
  }

}
