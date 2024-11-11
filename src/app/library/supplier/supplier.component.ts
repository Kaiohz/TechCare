import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { TechCareButtonsComponent } from '../../tech-care-buttons/tech-care-buttons.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import ApiService from '../services/api.service'
import { Supplier } from '../../dto/supplier';
import {
  MatSnackBar,
} from '@angular/material/snack-bar';


@Component({
  selector: 'app-supplier',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, MatIconModule, TechCareButtonsComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './supplier.component.html',
  styleUrl: './supplier.component.css',
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SupplierComponent {
  private _snackBar = inject(MatSnackBar);

  apiService = new ApiService();

  supplierForm = new FormGroup({
    companyName: new FormControl('', Validators.required),
    siret: new FormControl('', [Validators.required, Validators.pattern(/^\d{14}$/)]),
    adress: new FormControl('', Validators.required),
    contact: new FormControl('', Validators.required),
  });

  get companyName() {
    return this.supplierForm.get('companyName');
  }

  get siret() {
    return this.supplierForm.get('siret');
  }

  get adress() {
    return this.supplierForm.get('adress');
  }

  get contact() {
    return this.supplierForm.get('contact');
  }

  async onSubmit() {
    const supplier: Supplier = new Supplier();
    supplier.company_name = String(this.companyName?.value)
    supplier.siret = String(this.siret?.value)
    supplier.adress = String(this.adress?.value)
    supplier.contact = String(this.contact?.value)
    try {
      await this.apiService.addSupplier(supplier)
      this._snackBar.open('✅ Fournisseur ' + supplier.company_name + ' ajouté avec succès', '', {
        horizontalPosition: 'right',
        verticalPosition: 'bottom',
        panelClass: ['success-snack'],
        duration: 2500
      });
      this.supplierForm.reset()
    } catch (error) {
      this._snackBar.open('❌ Erreur lors de l\'ajout du fournisseur ' + supplier.company_name, '', {
        horizontalPosition: 'right',
        verticalPosition: 'bottom',
        panelClass: ['error-snack'],
        duration: 2500
      });
    }
  }
}
