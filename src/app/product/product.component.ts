import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import {
  MatSnackBar,
} from '@angular/material/snack-bar';
import { Product } from '../dto/product';
import ApiService from '../services/api/api.service';
import { TechCareButtonsComponent } from '../tech-care-buttons/tech-care-buttons.component';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [MatFormFieldModule, MatCheckboxModule, MatDatepickerModule, MatSelectModule, MatInputModule, MatIconModule, TechCareButtonsComponent, ReactiveFormsModule,CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  providers: [
    provideNativeDateAdapter(),
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ProductComponent {
  private _snackBar = inject(MatSnackBar);
  private apiService = new ApiService();
  familyProducts = this.apiService.getFamilyProducts()

  productForm = new FormGroup({
    name: new FormControl('',Validators.required),
    customs_code: new FormControl('',Validators.required),
    is_kit: new FormControl(false,Validators.required),
    ref: new FormControl('',Validators.required),
    serial_number: new FormControl('',Validators.required),
    img: new FormControl('',Validators.required),
    description: new FormControl('',Validators.required),
    public_price: new FormControl('',Validators.required),
    buying_price: new FormControl('',Validators.required),
    vat: new FormControl('',Validators.required),
    date_price: new FormControl('',Validators.required),
    units: new FormControl('',Validators.required),
    comments: new FormControl('',Validators.required),
    family_product: new FormControl('',Validators.required),
  });

  get name() {
    return this.productForm.get('name');
  }

  get customsCode() {
    return this.productForm.get('customs_code');
  }

  get isKit() {
    return this.productForm.get('is_kit');
  }

  get ref() {
    return this.productForm.get('ref');
  }

  get serialNumber() {
    return this.productForm.get('serial_number');
  }

  get img() {
    return this.productForm.get('img');
  }

  get description() {
    return this.productForm.get('description');
  }

  get publicPrice() {
    return this.productForm.get('public_price');
  }

  get buyingPrice() {
    return this.productForm.get('buying_price');
  }

  get vat() {
    return this.productForm.get('vat');
  }

  get datePrice() {
    return this.productForm.get('date_price');
  }

  get units() {
    return this.productForm.get('units');
  }

  get comments() {
    return this.productForm.get('comments');
  }

  get familyProduct() {
    return this.productForm.get('family_product');
  }

  async onSubmit() {
    const product: Product = new Product();
    product.name = String(this.name?.value)
    product.customs_code = String(this.customsCode?.value)
    try {
      // await this.apiService.addFamilyProduct(familyProduct)
      this._snackBar.open('✔ Famille de produit '+product.name+' ajoutée avec succès', '', {
        horizontalPosition: 'right',
        verticalPosition: 'bottom',
        panelClass: ['success-snack'],
        duration: 2500
      });
      this.productForm.reset()
    } catch (error) {
      this._snackBar.open('X Erreur lors de l\'ajout de la famille de produit '+product.name, '', {
        horizontalPosition: 'right',
        verticalPosition: 'bottom',
        panelClass: ['error-snack'],
        duration: 2500
      });
    }
  }
}
