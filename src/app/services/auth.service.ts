import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/api/usuarios'; // URL del backend

  constructor(private http: HttpClient) {}

  // Método para registrar un usuario
  register(user: { nombre: string; correo: string; contraseña: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/registrar`, user);
  }

  // Método para iniciar sesión
  login(credentials: { correo: string; contraseña: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }

  // Método para guardar el token en el localStorage
  saveToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  // Método para obtener el token del localStorage
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  // Método para cerrar sesión
  logout(): void {
    localStorage.removeItem('authToken');
  }

  // Método para verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
