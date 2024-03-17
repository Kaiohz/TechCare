import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tech-care-buttons',
  standalone: true,
  imports: [],
  templateUrl: './tech-care-buttons.component.html',
  styleUrl: './tech-care-buttons.component.css'
})
export class TechCareButtonsComponent {
  @Input({ required: true }) title!: string;
}
