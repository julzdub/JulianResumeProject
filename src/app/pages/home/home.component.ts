import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageHeaderComponent } from '../../components/page-header/page-header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    PageHeaderComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
