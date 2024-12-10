import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true, // Indica que este componente es standalone
})
export class HomeComponent {
  userData: any = {
    name: '',
    email: ''
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    const authUser = sessionStorage.getItem('authUser');
    if (authUser) {
      this.userData = JSON.parse(authUser);
    } else {
      alert('Debes iniciar sesión primero.');
      this.router.navigate(['/login']);
    }
  }

  logout(): void {
    sessionStorage.removeItem('authUser');
    this.router.navigate(['/login']);
  }
}
