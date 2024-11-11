import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { TechCareButtonsComponent } from '../../tech-care-buttons/tech-care-buttons.component';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import ApiService from '../services/api.service'
import {
  MatSnackBar,
} from '@angular/material/snack-bar';
import { FamilyProduct } from '../../dto/familyproduct';


@Component({
  selector: 'app-familyproduct',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, MatIconModule, TechCareButtonsComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './familyproduct.component.html',
  styleUrl: './familyproduct.component.css',
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class FamilyProductComponent {
  private _snackBar = inject(MatSnackBar);

  apiService = new ApiService();

  familyProductForm = new FormGroup({
    familyName: new FormControl('', Validators.required),
    specifications: new FormArray([])
  });

  get familyName() {
    return this.familyProductForm.get('familyName');
  }

  get specificationsFormArray(): FormArray {
    return this.familyProductForm.get('specifications') as FormArray;
  }

  addSpecification() {
    const newControl = new FormControl('', Validators.required);
    this.specificationsFormArray.push(newControl);
  }

  removeSpecification(index: number) {
    this.specificationsFormArray.removeAt(index);
  }

  async onSubmit() {
    const familyProduct: FamilyProduct = new FamilyProduct();
    familyProduct.family_name = String(this.familyName?.value)
    familyProduct.specifications = String(this.specificationsFormArray?.value)
    try {
      await this.apiService.addFamilyProduct(familyProduct)
      this._snackBar.open('✅ Famille de produit ' + familyProduct.family_name + ' ajoutée avec succès', '', {
        horizontalPosition: 'right',
        verticalPosition: 'bottom',
        panelClass: ['success-snack'],
        duration: 2500
      });
      this.familyProductForm.reset()
      this.specificationsFormArray.clear();
    } catch (error) {
      this._snackBar.open('❌ Erreur lors de l\'ajout de la famille de produit ' + familyProduct.family_name, '', {
        horizontalPosition: 'right',
        verticalPosition: 'bottom',
        panelClass: ['error-snack'],
        duration: 2500
      });
    }
  }
}
