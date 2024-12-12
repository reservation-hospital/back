export class Product implements IProduct {
  id: string;
  name: string;
  price: number;
  description: string;
  constructor(params: IProduct) {
    this.id = params.id;
    this.name = params.name;
    this.price = params.price;
    this.description = params.description;
  }
}
