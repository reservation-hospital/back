export default class SelectProduct implements ISelectProduct {
    _id?: string;
    name: string;
    price: number;
    description: string;

    constructor(params: ISelectProduct) {
        this._id = params._id;
        this.name = params.name;
        this.price = params.price;
        this.description = params.description;
    }
}