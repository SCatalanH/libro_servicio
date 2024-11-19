import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const authUser = sessionStorage.getItem('authUser');
    if (authUser) {
      return true; // Usuario autenticado
    } else {
      alert('Debes iniciar sesión para acceder a esta página.');
      this.router.navigate(['/login']); // Redirigir al login
      return false;
    }
  }
}
