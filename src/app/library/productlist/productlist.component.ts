import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import ApiService from '../services/api.service';
import { ProductSuppliers } from '../../bo/product.supplier';
import { Product } from '../../dto/product';

@Component({
  selector: 'app-productlist',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatSnackBarModule
  ],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductListComponent implements OnInit, AfterViewInit {
  private _snackBar = inject(MatSnackBar);
  displayedColumns: string[] = [
    'id',
    'name',
    'customs_code',
    'is_kit',
    'ref',
    'serial_number',
    'description',
    'public_price',
    'buying_price',
    'vat',
    'date_price',
    'units',
    'comments',
  ];
  dataSource = new MatTableDataSource<Product>([]);
  apiService = new ApiService();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() {
    this.loadProducts();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  async loadProducts() {
    try {
      const response = await this.apiService.getProducts();
      this.dataSource.data = response.products;
    } catch (error) {
      this._snackBar.open('❌ Erreur lors du chargement des produits', '', {
        horizontalPosition: 'right',
        verticalPosition: 'bottom',
        panelClass: ['error-snack'],
        duration: 2500
      });
    }
  }
}
