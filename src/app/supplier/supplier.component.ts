import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field'; 
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { TechCareButtonsComponent } from '../tech-care-buttons/tech-care-buttons.component';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-supplier',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, MatIconModule, TechCareButtonsComponent, ReactiveFormsModule],
  templateUrl: './supplier.component.html',
  styleUrl: './supplier.component.css',
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SupplierComponent {
  supplierForm = new FormGroup({
    companyName: new FormControl(''),
    siret: new FormControl(''),
    adress: new FormControl(''),
    contact: new FormControl(''),
  });
}
