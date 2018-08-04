import { Routes } from "@angular/router";
import { RegisterComponent } from "./pages/register/register.component";
import { TakeChallengeComponent } from "./pages/take-challenge/take-challenge.component";
import { LoginComponent } from "./pages/login/login.component";
import { AuthGuard } from "./auth.guard";


export const routes: Routes = [
  {
    path: '',
    redirectTo: '/take-challenge',
    pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'take-challenge', component: TakeChallengeComponent, canActivate: [AuthGuard] }
];