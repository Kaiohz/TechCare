import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-tech-care-buttons',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatIconModule, MatButtonModule, CommonModule],
  templateUrl: './tech-care-buttons.component.html',
  styleUrl: './tech-care-buttons.component.css'
})
export class TechCareButtonsComponent {
  @Input({ required: true }) name!: string;
  @Input() path?: string;
  @Input() buttonClass: string = 'default';
  @Input() icon?: string;
  @Input() type: string = 'basic';

}
