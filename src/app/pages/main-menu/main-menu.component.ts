import { Component, Signal, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink, RouterLinkActive } from '@angular/router';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ToggleMainMenuService } from '../../services/cache/toggle-main-menu.service';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterLink,
    RouterLinkActive,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule
  ],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.scss'
})
export class MainMenuComponent {

  toggleMainMenuService: ToggleMainMenuService = inject(ToggleMainMenuService);
  isMenuOpen: Signal<boolean> = toSignal(this.toggleMainMenuService.mainMenuIsOpen, { initialValue: true });

  appPages = [
    { title: 'Home', url: '/app/home', icon: 'home' },
    { title: 'Resume', url: '/app/resume', icon: 'description' },
    { title: 'About', url: '/app/about', icon: 'face' }
  ];

}
