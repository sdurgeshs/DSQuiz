import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { environment } from './../environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AuthService } from './services/auth.service';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { TakeChallengeComponent } from './pages/take-challenge/take-challenge.component';
import { RouterModule, Routes } from '../../node_modules/@angular/router';

const appRoutes: Routes = [
  {path: 'take-challenge', component: TakeChallengeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TakeChallengeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase, 'DSQuiz'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService],  
  bootstrap: [AppComponent]
})
export class AppModule { }
