import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterModule], // Agregar FormsModule y RouterModule
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  nombre: string = '';
  correo: string = '';
  contrasena: string = '';

  constructor() {}

  register(): void {
    // Obtener los usuarios existentes
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    // Verificar si el correo ya está registrado
    if (users.find((user: any) => user.email === this.correo)) {
      alert('Este correo ya está registrado.');
      return;
    }

    // Agregar el nuevo usuario
    users.push({ name: this.nombre, email: this.correo, password: this.contrasena });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Registro exitoso. Ahora puedes iniciar sesión.');
  }
}
