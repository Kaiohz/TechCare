import { environment } from '../../../environments/environment';
import { FamilyProduct } from '../../dto/familyproduct';
import { Supplier } from '../../dto/supplier';


class ApiService {
  
    public async apiCall(url: string, method :string, object?: object): Promise<Response> {
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
        try{
          const response = await this.apiCall(url,'POST',supplier)
          if(!response.ok){
            throw new Error(`Error adding supplier ${supplier.company_name}`);
          }
          return response.json();
        } catch (error) {
          throw new Error(`Error adding supplier ${supplier.company_name}`);
        }
      }

      public async addFamilyProduct(familyProduct: FamilyProduct): Promise<{ message: string }> {
        const url = `${environment.backApiUrl}${environment.familyProductEndpoint}`;
          try{
            const response = await this.apiCall(url,'POST',familyProduct)
            if(!response.ok){
              throw new Error(`Error adding family product ${familyProduct.family_name}`);
            }
            return response.json();
          } catch (error) {
            throw new Error(`Error adding family product ${familyProduct.family_name}`);
          }
        }

        public async getFamilyProducts(): Promise<{ familyProducts: FamilyProduct[] }> {
          const url = `${environment.backApiUrl}${environment.familyProductGetEndpoint}`;
            try{
              const response = await this.apiCall(url,'GET')
              if(!response.ok){
                throw new Error(`Error getting family products`);
              }
              return response.json();
            } catch (error) {
              throw new Error(`Error getting family products`);
            }
          }
  }

export default ApiService;