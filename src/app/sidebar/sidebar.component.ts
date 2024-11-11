import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { RouterOutlet, RouterLink, RouterLinkActive, Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterItem } from '../bo/router-item';
import { TechCareButtonsComponent } from '../tech-care-buttons/tech-care-buttons.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatButtonModule, FormsModule, MatCheckboxModule, MatSidenavModule, MatListModule, CommonModule, TechCareButtonsComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  events: string[] = [];
  opened: boolean = true;
  itemList: RouterItem[] = []

  private menuItems = new Map<string, RouterItem[]>([
    ['library', [
      { name: 'Creer fournisseur', path: '/library/supplier', icon: 'add' },
      { name: 'Creer famille produit', path: '/library/familyproduct', icon: 'add' },
      { name: 'Creer produit', path: '/library/product', icon: 'add' },
      { name: 'Lister produits', path: '/library/listproducts', icon: 'list' },
    ]]
  ]);

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateListBasedOnUrl(event.urlAfterRedirects);
      }
    });

    // Initialize the list based on the initial URL
    this.updateListBasedOnUrl(this.router.url);
  }

  updateListBasedOnUrl(url: string) {
    for (let [key, value] of this.menuItems) {
      if (url.includes(key)) {
        this.itemList = value;
        return;
      }
    }
    this.itemList = [];
  }

}
