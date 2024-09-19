import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderPanelItem } from './bo/header-panel-item';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TechChare';
  logoPath = 'assets/img/logo.png'
  headerPanelItems: HeaderPanelItem[] = [
    {path: 'library', name: 'Bibliothèque'},
    {path: 'sav', name: 'Assistance SAV'},
    {path: 'clients', name: 'Clients'},
    {path: 'admin', name: 'Administration'},
    {path: 'reports', name: 'Rapports'},
  ]
}
