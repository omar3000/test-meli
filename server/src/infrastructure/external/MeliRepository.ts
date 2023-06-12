import { ProductRepository } from "../../domain/repositories/ProductRepository";
import { Results, Items, Author, ProductDetail, ItemDetail } from "../../domain/models/Results";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export class MeliRepository implements ProductRepository {
  async getProducts(query: string): Promise<Results | null> {

    try {
      const response = await axios.get(`${process.env.API_MELI}/sites/MLA/search?q=${query}&limit=4`);

      const priceFormatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 2,
      });

      const { data } = response;
      const items: Array<Items> = data.results.map((item: any) => ({
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id,
          amount: item.price,
          decimals: priceFormatter.format(item.price)
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item?.shipping?.free_shipping 
      }));

      const author: Author = {
        name: "Omar",
        lastname: "FRanco"
      };

      const categories = data.filters.map((category) => category.name);

      const results: Results = {
        author,
        categories,
        items
      };

      return results;

    } catch (error) {
      return null;
    }
  }

  async getProductDetail(id: string): Promise<ProductDetail | null> {

    try {
      const [itemResponse, descriptionResponse]: any = await Promise.allSettled([axios.get(`${process.env.API_MELI}/items/${id}`),axios.get(`${process.env.API_MELI}/items/${id}/description`)]);

      const priceFormatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 2,
      });

      const data = itemResponse.value.data;
      const description = descriptionResponse.value.data.plain_text; 

      const item: ItemDetail = {
        id: data.id,
        title: data.title,
        price: {
          currency: data.currency_id,
          amount: data.price,
          decimals: Number(priceFormatter.format(data.price))
        },
        picture: data.thumbnail,
        condition: data.condition,
        free_shipping: data?.shipping?.free_shipping,
        sold_quantity: data.sold_quantity,
        description: description 
      };  

      const author: Author = {
        name: "Omar",
        lastname: "Franco"
      };

      const results: ProductDetail = {
        author,
        item
      };

      return results;

    } catch (error) {
      return null;
    }
  }

}

