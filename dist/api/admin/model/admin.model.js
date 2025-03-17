"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = void 0;
class Admin {
    id;
    email;
    password;
    name;
    role;
    hospital;
    products;
    orders;
    selectProducts;
    constructor(params) {
        this.id = params.id;
        this.email = params.email;
        this.password = params.password;
        this.name = params.name;
        this.role = params.role ?? "admin";
        this.hospital = params.hospital;
        this.products = params.products;
        this.orders = params.orders;
        this.selectProducts = params.selectProducts;
    }
}
exports.Admin = Admin;
//# sourceMappingURL=admin.model.js.map