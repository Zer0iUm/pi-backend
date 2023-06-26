// Assuming you have the necessary imports and models set up
const express = require('express');
const { Cart, Product, CartItem } = require('../models');

const router = express.Router();

router.post('/', async (req, res) => {
	try {
		const { products } = req.body;

		// Create a new cart
		const cart = await Cart.create({
			user_id: req.user.id, // Assuming you have user authentication and req.user represents the logged-in user
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

module.exports = router;
