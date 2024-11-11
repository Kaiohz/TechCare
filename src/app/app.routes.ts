import { Routes } from '@angular/router';
import { SupplierComponent } from './supplier/supplier.component';
import { FamilyProductComponent } from './familyproduct/familyproduct.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
    {
        path: 'library',
        children: [
            { path: 'supplier', component: SupplierComponent },
            { path: 'familyproduct', component: FamilyProductComponent },
            { path: 'product', component: ProductComponent },
        ] }
    
];
