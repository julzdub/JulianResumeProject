import { Component, Input, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { ToggleMainMenuService } from '../../services/cache/toggle-main-menu.service';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [
    CommonModule, 
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule
  ],
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.scss'
})
export class PageHeaderComponent {

  @Input() title: string = '';
  @Input() showMenuButton: boolean = false;

  toggleMainMenuService: ToggleMainMenuService = inject(ToggleMainMenuService);
  toggleMainNav() {
    this.toggleMainMenuService.toggleMenuIsOpen();
  }

}
