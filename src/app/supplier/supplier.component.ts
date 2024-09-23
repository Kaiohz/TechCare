import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field'; 
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { TechCareButtonsComponent } from '../tech-care-buttons/tech-care-buttons.component';

@Component({
  selector: 'app-supplier',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, MatIconModule, TechCareButtonsComponent],
  templateUrl: './supplier.component.html',
  styleUrl: './supplier.component.css',
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SupplierComponent {

}
