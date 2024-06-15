import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';

import { PageHeaderComponent } from '../../components/page-header/page-header.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    PageHeaderComponent,
    MatGridListModule,
    MatCardModule
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  mediaLinks: any[] = [
    {
      title: "Video 1",
      url: "https://www.youtube.com/watch?v=wvLOtfQ5xAc"
    },
    {
      title: "Video 2",
      url: "https://www.youtube.com/watch?v=Ui46f2tHhPo"
    },
    {
      title: "Video 3",
      url: "https://www.youtube.com/watch?v=5xcQGMjC86Y&"
    }
  ];
}
