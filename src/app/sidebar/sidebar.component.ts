import {Component, Input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { SidePanelItem } from '../bo/side-panel-item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive,MatButtonModule, FormsModule, MatCheckboxModule, MatSidenavModule, MatListModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Input({ required: true }) sidePanelItems!: SidePanelItem[];
  events: string[] = [];
  opened: boolean = false;
}
