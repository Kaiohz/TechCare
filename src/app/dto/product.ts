export class Product {
    id?: number;
    name!: string;
    customs_code!: string;
    is_kit!: boolean;
    ref!: string;
    serial_number!: string;
    img!: string;
    description!: string;
    public_price!: number;
    buying_price!: number;
    vat!: string;
    date_price!: Number;
    units!: number;
    comments!: string;
    family_product_id!: number;
    specifications?: string;
    suppliers?: number[];
}