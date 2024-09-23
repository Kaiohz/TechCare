import { Routes } from '@angular/router';
import { SupplierComponent } from './supplier/supplier.component';

export const routes: Routes = [
    {
        path: 'library',
        children: [
            { path: 'supplier', component: SupplierComponent }
        ] }
    
];
