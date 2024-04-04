import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { PageHeaderComponent } from '../../components/page-header/page-header.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    PageHeaderComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
