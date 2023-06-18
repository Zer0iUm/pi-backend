const { body } = require("express-validator");
const express = require("express");
const router = express.Router();

/* Controllers */
const mainController = require("../controllers/MainController");
const productController = require("../controllers/ProductController");
const userController = require("../controllers/userController");

//middlewares
const log = require("../middlewares/log");
const upload = require("../middlewares/upload"); // multer
const authentication = require("../middlewares/authentication");
const path = require("path"); // MANIPULAR PASTAS

router.get("/product", mainController.index); // router.get('/',  log, mainController.index);

router.get("/homeStore", mainController.homeStore);

router.get("/cervejas", mainController.cervejas);

router.get("/listAcessories", mainController.listAcessories);

router.get("/kits", mainController.kits);

/* router.get("/login", mainController.login); */

router.post("/login", userController.userLogin);

/* router.get("/logout", mainController.logout);

router.get("/accountUser", mainController.accountUser);

router.get("/accountAdmin", mainController.accountAdmin); */

//router.get("/productRegistration", productController.createFormEJS);

//router.get("/product/update/:id", productController.updateFormEJS);

//router.get('/productUpdate', productController.updateEJS);

//router.get("/product", mainController.product);

//router.get('/product/:id', mainController.search);

/* router.get("/checkout", mainController.checkout); */

//router.get("/search", mainController.search); Não usa mais o search

router.get("/shoppingCart", authentication, mainController.shoppingCart);

//user

/* router.get("/signUp", mainController.signUp); */

router.post("/signUp", userController.register);

//Product
//router.get("/product", productController.showAll);

router.get("/product/:id", productController.showById);

//router.get("/erro", mainController.erro); (teve um erro por causa dessa rota, por isso comentei - Camila)

// # Product

// GET - EJS Create Form - View
//router.get('/product/create', productController.createFormEJS)

// GET - EJS Update Form - View
//router.get('/product/update/:id', productController.updateFormEJS); testeando

// AUTENTICAÇÃO COMENTADA PARA FAZER O CRUD NO FRONTEND (REACT)
// POST - EJS Create
router.post(
  "/product",
  /* authentication, */
  upload.any(),
  body("name").notEmpty().withMessage("Nome do Produto deve ser informado"),
  productController.createEJS
);

// PUT - EJS Update
router.post(
  "/product/:id",
  /* authentication, */
  upload.any(),
  productController.updateEJS
);

// DELETE - EJS Delete
router.delete("/product/:id", /* authentication */ productController.deleteEJS);

module.exports = router;
