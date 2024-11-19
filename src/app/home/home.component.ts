import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  userData: any = {
    name: '',
    email: ''
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Simula la obtención de datos del usuario desde sessionStorage
    const authUser = sessionStorage.getItem('authUser');
    if (authUser) {
      this.userData = JSON.parse(authUser);
    } else {
      // Redirige al login si no hay datos de autenticación
      alert('Debes iniciar sesión primero.');
      this.router.navigate(['/login']);
    }
  }

  logout(): void {
    // Elimina los datos de autenticación y redirige al login
    sessionStorage.removeItem('authUser');
    this.router.navigate(['/login']);
  }
}
