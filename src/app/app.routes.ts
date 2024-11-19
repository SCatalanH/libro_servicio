import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard'; // Importa el guard

function canActivate(): boolean {
  const authUser = sessionStorage.getItem('authUser');
  return !!authUser || (alert('Debes iniciar sesión para acceder a esta página.'), false);
}

export const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'recover-password', component: RecoverPasswordComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] } // Usa el guard aquí
];
