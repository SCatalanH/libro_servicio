import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule], // Agregar FormsModule y RouterModule
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  correo: string = '';
  contrasena: string = '';

  constructor(private router: Router) {}

  login(): void {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(
      (user: any) => user.email === this.correo && user.password === this.contrasena
    );
  
    if (user) {
      alert(`¡Bienvenido, ${user.name}!`);
      sessionStorage.setItem('authUser', JSON.stringify(user)); // Guarda al usuario autenticado
      this.router.navigate(['/home']);
    } else {
      alert('Credenciales incorrectas. Inténtalo de nuevo.');
    }
  }
  
}
