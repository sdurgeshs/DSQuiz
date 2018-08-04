import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { environment } from '../environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AuthService } from './services/auth.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { TakeChallengeComponent } from './pages/take-challenge/take-challenge.component';
import { RouterModule, Routes } from '@angular/router';
import { AngularMaterialModule } from './modules/angular-material.module';
import { RegisterComponent } from './pages/register/register.component';
import { routes } from './routes';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TakeChallengeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase, 'DSQuiz'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, AuthGuard],  
  bootstrap: [AppComponent]
})
export class AppModule { }
