import { Routes } from '@angular/router';
import { SupplierComponent } from './library/supplier/supplier.component';
import { FamilyProductComponent } from './library/familyproduct/familyproduct.component';
import { ProductComponent } from './library/product/product.component';
import { ProductListComponent } from './library/productlist/productlist.component';

export const routes: Routes = [
    {
        path: 'library',
        children: [
            { path: 'supplier', component: SupplierComponent },
            { path: 'familyproduct', component: FamilyProductComponent },
            { path: 'product', component: ProductComponent },
            { path: 'listproducts', component: ProductListComponent },
        ]
    }
];
