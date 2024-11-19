import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule], // Importa RouterModule para manejar <router-outlet>
  template: `
    <div>
      <h1>My Application</h1>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {}
