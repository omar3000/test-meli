import { ProductRepository } from "../../domain/repositories/ProductRepository";
import { Results, Items, Author } from "../../domain/models/Results";
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
      console.log(data);
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
}

