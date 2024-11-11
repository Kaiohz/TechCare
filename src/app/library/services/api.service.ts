import { environment } from '../../../environments/environment';
import { FamilyProduct } from '../../dto/familyproduct';
import { Supplier } from '../../dto/supplier';
import { Product } from '../../dto/product';
import { ProductSuppliers } from '../../bo/product.supplier';


class ApiService {

  public async apiCall(url: string, method: string, object?: object): Promise<Response> {
    return await fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'api_key': 'apikey'
      },
      body: JSON.stringify(object),
    });
  }

  public async addSupplier(supplier: Supplier): Promise<{ message: string }> {
    const url = `${environment.backApiUrl}${environment.supplierEndpoint}`;
    try {
      const response = await this.apiCall(url, 'POST', supplier)
      if (!response.ok) {
        throw new Error(`Error adding supplier ${supplier.company_name}`);
      }
      return response.json();
    } catch (error) {
      throw new Error(`Error adding supplier ${supplier.company_name}`);
    }
  }

  public async getSuppliers(): Promise<Supplier[]> {
    const url = `${environment.backApiUrl}${environment.supplierGetEndpoint}`;
    try {
      const response = await this.apiCall(url, 'GET')
      if (!response.ok) {
        throw new Error(`Error getting suppliers`);
      }
      return response.json();
    } catch (error) {
      throw new Error(`Error getting suppliers`);
    }
  }

  public async addFamilyProduct(familyProduct: FamilyProduct): Promise<{ message: string }> {
    const url = `${environment.backApiUrl}${environment.familyProductEndpoint}`;
    try {
      const response = await this.apiCall(url, 'POST', familyProduct)
      if (!response.ok) {
        throw new Error(`Error adding family product ${familyProduct.family_name}`);
      }
      return response.json();
    } catch (error) {
      throw new Error(`Error adding family product ${familyProduct.family_name}`);
    }
  }

  public async getFamilyProducts(): Promise<FamilyProduct[]> {
    const url = `${environment.backApiUrl}${environment.familyProductGetEndpoint}`;
    try {
      const response = await this.apiCall(url, 'GET')
      if (!response.ok) {
        throw new Error(`Error getting family products`);
      }
      return response.json();
    } catch (error) {
      throw new Error(`Error getting family products`);
    }
  }

  public async addProduct(product: Product): Promise<{ message: string }> {
    try {
      const base64Size = Math.round((product.img.length * 3) / 4);
      const maxSize = 5 * 1024 * 1024; // 5MB max par exemple

      if (base64Size > maxSize) {
        throw new Error('Image trop volumineuse. Taille maximum: 5MB');
      }

      const url = `${environment.backApiUrl}${environment.productEndpoint}`
      const response = await this.apiCall(url, 'POST', product)
      if (!response.ok) {
        throw new Error(`Error adding product ${product.name}`);
      }
      return response.json();
    } catch (error) {
      throw new Error(`Error adding product ${product.name}`);
    }
  }

  public async getProducts(): Promise<ProductSuppliers> {
    try {
      const url = `${environment.backApiUrl}${environment.productGetEndpoint}`;
      const response = await this.apiCall(url, 'GET');
      if (!response.ok) {
        throw new Error('Error getting products');
      }
      return await response.json();
    } catch (error) {
      throw error;
    }
  }
}

export default ApiService;