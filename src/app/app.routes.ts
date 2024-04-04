import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full'
  },
  {
    path: 'app',
    loadComponent: () => import('./pages/main-menu/main-menu.component').then(page => page.MainMenuComponent),
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component').then(page => page.HomeComponent)
      },
      {
        path: 'resume',
        loadComponent: () => import('./pages/resume/resume.component').then(page => page.ResumeComponent)
      },
      {
        path: 'about',
        loadComponent: () => import('./pages/about/about.component').then(page => page.AboutComponent)
      }
    ]
  },
  {
    path: 'not-found',
    loadComponent: () => import('./pages/not-found/not-found.component').then(page => page.NotFoundComponent)
  },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full'
  }
];