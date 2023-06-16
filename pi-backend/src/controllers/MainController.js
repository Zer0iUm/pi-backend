const products = require("../database/products.json");
const { Product, User, User_Adress } = require("../models");
const users = require("../database/users.json");
const { Op } = require("sequelize");

const MainController = {
  index: async (req, res) => {
    let search = "";
    if (req.query.keywords) {
      search = req.query.keywords;
    }

    try {
      const products = await Product.findAll({
        where: {
          name: {
            [Op.substring]: search, // sequelize findAll na busca
          },
        },
      });

      res.status(200).json(products);
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  homeStore: async (req, res) => {
    try {
      const products = await Product.findAll();

      res.json(products)

    } catch (error) {
      res.status(400).json({ error });
    }
  },

  cervejas: async (req, res) => {
    try {
      const products = await Product.findAll({
        where: {
          product_type_id: 1, // Filtra apenas produtos do tipo cerveja
        },
      });

      res.json(products)

    } catch (error) {
      res.status(400).json({ error });
    }
  },

  listAcessories: async (req, res) => {
    try {
      const products = await Product.findAll({
        where: {
          product_type_id: 2, // Filtra apenas produtos do tipo acessórios
        },
      });

      res.json(products)

    } catch (error) {
      res.status(400).json({ error });
    }
  },

  kits: async (req, res) => {
    try {
      const products = await Product.findAll({
        where: {
          product_type_id: 3, // Filtra apenas produtos do tipo kits
        },
      });

      res.json(products)

    } catch (error) {
      res.status(400).json({ error });
    }
  },

  login: (req, res) => {
    res.render("login", { req });
    toThousand;
  },
  logout: (req, res) => {
    req.session.destroy();
    res.redirect("homeStore");
    toThousand;
  },
  accountUser: (req, res) => {
    const id = req.session.id;
    res.render("accountUser", { req, id });
    toThousand;
  },
  accountAdmin: (req, res) => {
    res.render("accountAdmin", { req });
    toThousand;
  },

  product: (req, res) => {
    res.render("product", { req, products });
    toThousand;
  },

  checkout: (req, res) => {
    res.render("checkout", { req });
  },

  shoppingCart: async (req, res) => {
    try {
      const products = await Product.findAll();

      res.json(products)


    } catch (error) {
      res.status(400).json({ error });
    }
  },

  signUp: (req, res) => {
    res.render("signUp", { req });
  },
};

module.exports = MainController;
