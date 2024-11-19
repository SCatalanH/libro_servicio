import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recover-password',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './recover-password.component.html',
})
export class RecoverPasswordComponent {
  email: string = '';
  token: string | null = null; // Ahora la propiedad 'token' está definida.

  recoverPassword() {
    console.log('Correo:', this.email);
    this.token = 'TokenEjemplo'; // Simula la recepción de un token.
  }
}
