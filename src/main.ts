import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app/app.routes';
import { importProvidersFrom } from '@angular/core';


bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(MatSnackBarModule),
    importProvidersFrom(BrowserAnimationsModule),
    provideRouter(routes, withComponentInputBinding())
  ],
}).catch(err => console.error(err));
