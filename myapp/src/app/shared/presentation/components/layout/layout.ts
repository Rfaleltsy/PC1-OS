import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from '../toolbar/toolbar';
import { FooterComponent } from '../footer/footer';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, ToolbarComponent, FooterComponent],
  templateUrl: './layout.html',
  styleUrls: ['./layout.css'],
})
export class LayoutComponent {}
