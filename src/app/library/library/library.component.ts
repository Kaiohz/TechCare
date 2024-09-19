import { Component } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [MatListModule, MatGridListModule],
  templateUrl: './library.component.html',
  styleUrl: './library.component.css'
})
export class LibraryComponent {
}
