import { Component, Input } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderPanelItem } from '../bo/header-panel-item';
import {MatListModule} from '@angular/material/list';
import { CommonModule } from '@angular/common';
import {TechCareButtonsComponent} from '../tech-care-buttons/tech-care-buttons.component'




@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatListModule, TechCareButtonsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input({ required: true }) headerPanelItems!: HeaderPanelItem[];
  @Input({ required: true }) logoPath!: string;
}
