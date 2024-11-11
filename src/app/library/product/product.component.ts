import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import {
  MatSnackBar,
} from '@angular/material/snack-bar';
import { Product } from '../../dto/product';
import ApiService from '../services/api.service';
import { TechCareButtonsComponent } from '../../tech-care-buttons/tech-care-buttons.component';
import { FamilyProduct } from '../../dto/familyproduct';
import { Supplier } from '../../dto/supplier';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [MatFormFieldModule, MatCheckboxModule, MatDatepickerModule, MatSelectModule, MatInputModule, MatIconModule, TechCareButtonsComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  providers: [
    provideNativeDateAdapter(),
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ProductComponent implements OnInit {
  private _snackBar = inject(MatSnackBar);
  private apiService = new ApiService();
  familyProducts: FamilyProduct[] = [];
  private cdr: ChangeDetectorRef;
  suppliers: Supplier[] = [];

  productForm = new FormGroup({
    name: new FormControl('', Validators.required),
    customs_code: new FormControl('', Validators.required),
    is_kit: new FormControl(false, Validators.required),
    ref: new FormControl('', Validators.required),
    serial_number: new FormControl('', Validators.required),
    img: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    public_price: new FormControl('', Validators.required),
    buying_price: new FormControl('', Validators.required),
    vat: new FormControl('', Validators.required),
    date_price: new FormControl('', Validators.required),
    units: new FormControl('', Validators.required),
    comments: new FormControl('', Validators.required),
    family_product: new FormControl<FamilyProduct | null>(null, Validators.required),
    specifications: new FormArray([]),
    suppliers: new FormControl<Supplier[]>([], Validators.required),
  });

  // Getter pour accéder facilement au FormArray
  get specificationsArray() {
    return this.productForm.get('specifications') as FormArray;
  }

  constructor(cdr: ChangeDetectorRef) {
    this.cdr = cdr;
  }

  ngOnInit() {
    this.apiService.getFamilyProducts()
      .then(data => {
        this.familyProducts = data;
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des familles de produits:', error);
      });

    this.apiService.getSuppliers()
      .then(data => {
        this.suppliers = data;
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des fournisseurs:', error);
      });

    this.productForm.get('family_product')?.valueChanges.subscribe(selectedFamily => {
      if (selectedFamily && selectedFamily.specifications) {
        this.updateSpecificationsFormArray(selectedFamily.specifications);
      }
    });
  }

  private updateSpecificationsFormArray(specifications: string) {
    while (this.specificationsArray.length) {
      this.specificationsArray.removeAt(0);
    }

    // Créer un nouveau contrôle pour chaque spécification
    const specs = specifications.split(',');
    specs.forEach(spec => {
      this.specificationsArray.push(new FormGroup({
        name: new FormControl(spec.trim()),
        value: new FormControl('', Validators.required)
      }));
    });
  }

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

  get supplierControl() {
    return this.productForm.get('suppliers');
  }

  private buildProductFromForm(): Product {
    const product: Product = new Product();

    product.name = String(this.name?.value);
    product.customs_code = String(this.customsCode?.value);
    product.is_kit = Boolean(this.isKit?.value);
    product.ref = String(this.ref?.value);
    product.serial_number = String(this.serialNumber?.value);
    product.img = String(this.img?.value);
    product.description = String(this.description?.value);
    product.public_price = Number(this.publicPrice?.value);
    product.buying_price = Number(this.buyingPrice?.value);
    product.vat = String(this.vat?.value);

    const dateValue = this.datePrice?.value;
    if (dateValue) {
      const date = new Date(dateValue);
      product.date_price = date.getTime();
    }

    product.units = Number(this.units?.value);
    product.comments = String(this.comments?.value);

    const selectedFamily = this.familyProduct?.value;
    if (selectedFamily) {
      product.family_product_id = selectedFamily.id;
    }

    const specifications = this.specificationsArray.controls.map(control => ({
      name: control.get('name')?.value,
      value: control.get('value')?.value
    }));
    product.specifications = JSON.stringify(specifications);

    const selectedSuppliers = this.supplierControl?.value;
    if (selectedSuppliers) {
      product.suppliers = selectedSuppliers.map(supplier => supplier.id);
    }

    return product;
  }

  async onSubmit() {
    try {
      const product = this.buildProductFromForm();
      await this.apiService.addProduct(product);
      this._snackBar.open('✅ Produit ' + product.name + ' ajouté avec succès', '', {
        horizontalPosition: 'right',
        verticalPosition: 'bottom',
        panelClass: ['success-snack'],
        duration: 2500
      });

      this.productForm.reset();

    } catch (error) {
      console.error('Erreur lors de l\'ajout du produit:', error);
      this._snackBar.open('❌ Erreur lors de l\'ajout du produit', '', {
        horizontalPosition: 'right',
        verticalPosition: 'bottom',
        panelClass: ['error-snack'],
        duration: 2500
      });
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];

      if (!file.type.startsWith('image/')) {
        this._snackBar.open('❌ Veuillez sélectionner une image', '', {
          horizontalPosition: 'right',
          verticalPosition: 'bottom',
          panelClass: ['error-snack'],
          duration: 2500
        });
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        this._snackBar.open('❌ L\'image est trop volumineuse (max 5MB)', '', {
          horizontalPosition: 'right',
          verticalPosition: 'bottom',
          panelClass: ['error-snack'],
          duration: 2500
        });
        return;
      }

      const reader = new FileReader();

      reader.onload = () => {
        const base64String = reader.result as string;
        this.img?.setValue(base64String);
        this.cdr.markForCheck();
      };

      reader.readAsDataURL(file);
    }
  }
}
