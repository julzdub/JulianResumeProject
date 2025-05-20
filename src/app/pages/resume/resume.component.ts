import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [
    CommonModule,
    PageHeaderComponent,
    MarkdownModule
  ],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {}
