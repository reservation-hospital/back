export default class SelectProduct implements ISelectProduct {
    id: string;
    name: string;
    price: number;
    description: string;

    constructor(params: ISelectProduct) {
        this.id = params.id;
        this.name = params.name;
        this.price = params.price;
        this.description = params.description;
    }
}