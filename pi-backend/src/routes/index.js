const { body } = require('express-validator');
const express = require('express');
const router = express.Router();

const { Cart, Product, CartItem } = require('../models');

/* Controllers */
const mainController = require('../controllers/MainController');
const productController = require('../controllers/ProductController');
const userController = require('../controllers/userController');
const cartController = require('../controllers/CartController');

//middlewares
const log = require('../middlewares/log');
const upload = require('../middlewares/upload'); // multer
const authentication = require('../middlewares/authentication');
const path = require('path'); // MANIPULAR PASTAS

router.get('/product', mainController.index); // router.get('/',  log, mainController.index);

router.get('/homeStore', mainController.homeStore);

router.get('/cervejas', mainController.cervejas);

router.get('/listAcessories', mainController.listAcessories);

router.get('/kits', mainController.kits);

router.post('/login', userController.userLogin);

router.get('/shoppingCart', authentication, mainController.shoppingCart);

//user

router.post('/signUp', userController.register);

//cart
router.post('/cart', async (req, res) => {
	try {
		const { products } = req.body;

		// Create a new cart
		const cart = await Cart.create({
			user_id: req.id, // Assuming you have user authentication and req.user represents the logged-in user
			status: false, // Assuming status indicates if the cart is completed or not
		});

		// Add products to the cart
		for (const product of products) {
			await CartItem.create({
				cart_id: cart.id,
				product_id: product.id,
				quantity: product.quantity,
				price: product.price,
			});
		}

		// Calculate the total price
		const total = await CartItem.sum('price', {
			where: { cart_id: cart.id },
		});

		// Update the cart with the total price
		await cart.update({ total });

		res.status(201).json({
			success: true,
			message: 'Cart created successfully.',
		});
	} catch (error) {
		console.error('Error creating cart:', error);
		res.status(500).json({
			success: false,
			message: 'Error creating cart.',
		});
	}
});

//Product

router.get('/product/:id', productController.showById);

router.post(
	'/product',
	/* authentication, */
	upload.any(),
	body('name').notEmpty().withMessage('Nome do Produto deve ser informado'),
	productController.createEJS
);

// PUT - EJS Update
router.post(
	'/product/:id',
	/* authentication, */
	upload.any(),
	productController.updateEJS
);

// DELETE - EJS Delete
router.delete('/product/:id', /* authentication */ productController.deleteEJS);

module.exports = router;
