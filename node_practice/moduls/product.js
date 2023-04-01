const { v4: uuidv4 } = require("uuid");
const fs = require("node:fs");
const path = require("node:path");

const status = [
  { "ТОП ПРОДАЖ": "top" },
  { "ТОЛЬКО В РОЗЕТКЕ": "rozetka" },
  { АКЦИЯ: "sale" },
  { НОВИНКА: "new" },
  { "ХИТ ПРОДАЖИ": "bests" },
];

// status.find(item=> item[this.status]) /// {"АКЦИЯ":"sale"}

class Product {
  constructor(title, src, priceRetail, priceSale, status) {
    this.src = src;
    this.priceRetail = priceRetail; // 100
    this.title = title;
    this.priceSale = priceRetail - (priceRetail * priceSale) / 100; //
    this.status = status;
    this.id = uuidv4();
  }

  toJSON() {
    return {
      id: this.id,
      src: this.src,
      title: this.title,
      label: {
        status: Object.entries(status.find((item) => item[this.status]))[0][1],
        text: this.status,
      },
      prices: {
        retail: this.priceRetail,
        sale: this.priceSale,
        currency: "грн",
      },
    };
  }

  static getAll() {
    return new Promise((resolve, reject) => {
      fs.readFile(
        path.join(__dirname, "..", "mockData", "products.json"),
        "utf-8",
        (err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(JSON.parse(data));
          }
        }
      );
    });
  }

  static async getByID(id) {
    const products = await Product.getAll();
    return products.find((prod) => prod.id === id);
  }

  async saveProduct() {
    const products = await Product.getAll();
    products.push(this.toJSON());

    return new Promise((resolve, reject) => {
      fs.writeFile(
        path.join(__dirname, "..", "mockData", "products.json"),
        JSON.stringify(products),
        (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        }
      );
    });
  }

  static async delProduct(id) {
    const products = await Product.getAll();
    const delProduct = products.filter((product) => product.id !== id);

    return new Promise((resolve, reject) => {
      fs.writeFile(
        path.join(__dirname, "..", "mockData", "products.json"),
        JSON.stringify(delProduct),
        (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        }
      );
    });
  }
}

module.exports = Product;
