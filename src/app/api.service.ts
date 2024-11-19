import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:8080/api/usuarios';

  constructor(private http: HttpClient) {}

  login(correo: string, contraseña: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, { correo, contraseña });
  }

  register(usuario: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/registrar`, usuario);
  }

  recoverPassword(correo: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/recover-password`, { correo });
  }

  updateProfile(id: number, usuario: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}/actualizar`, usuario);
  }
}
