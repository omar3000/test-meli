export interface Results {
    author: Author;
    categories: Array<string>;
    items: Array<Items>;
}

export interface ProductDetail  {
    author: Author;
    item: ItemDetail;
}

export interface Author {
    name: string;
    lastname: string;
}

export interface Items {
    id: string;
    title: string;
    picture: string;
    condition: string;
    free_shipping: boolean; 
    price: Price;
}

export interface ItemDetail extends Items {
    sold_quantity: number;
    description: string;
}

export interface Price  {
    currency: number;
    amount: number;
    decimals: number;
}