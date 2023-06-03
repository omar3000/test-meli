export interface Results {
    author: Author;
    categories: Array<string>;
    items: Array<Items>;
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

export interface Price  {
    currency: number;
    amount: number;
    decimals: number;
}