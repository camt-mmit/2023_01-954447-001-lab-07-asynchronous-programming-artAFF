import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dynamic-section-page',
  standalone: true,
  imports: [CommonModule, RouterLinkActive, RouterLink, RouterOutlet],
  templateUrl: './dynamic-section-page.component.html',
  styleUrls: ['./dynamic-section-page.component.scss']
})
export class DynamicSectionPageComponent {

}
