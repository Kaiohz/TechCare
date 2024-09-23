import { Component, Input } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterItem } from '../bo/router-item';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { TechCareButtonsComponent } from '../tech-care-buttons/tech-care-buttons.component'
import { MatIcon } from '@angular/material/icon';




@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatListModule, TechCareButtonsComponent, MatIcon],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input({ required: true }) headerPanelItems!: RouterItem[];
  @Input({ required: true }) logoPath!: string;
}
