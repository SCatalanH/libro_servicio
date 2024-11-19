import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { importProvidersFrom } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importar módulos de formularios

export const appConfig = [
  provideRouter(appRoutes),
  importProvidersFrom(FormsModule, ReactiveFormsModule), // Importar ambos módulos
];
 