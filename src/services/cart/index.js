import { Router, text } from 'express';
import model from '../../db/index.js';

const Cart = model.Cart;
// const Product = model.Product;

const CartRoute = Router();

CartRoute.get('/', async (req, res, next) => {
  try {
    const carts = await Cart.findAll({
      include: [
        {
          model: model.Product,
          attributes: ['id', 'price', 'description', 'category', 'brand'],
        },
      ],
      attributes: {
        exclude: ['productId', 'userId', 'createdAt', 'updatedAt'],
      },
    });
    res.status(200).send(carts);
  } catch (error) {
    next(error);
  }
});
CartRoute.get('/:id', async (req, res, next) => {
  try {
    const cart = await Cart.findById(req.params.id);
    res.status(200).send(cart);
  } catch (error) {
    next(error);
  }
});
CartRoute.post('/', async (req, res, next) => {
  try {
    const cart = await Cart.create(req.body);
    res.status(201).send(cart);
  } catch (error) {
    next(error);
  }
});
CartRoute.put('/:id', async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});
CartRoute.delete('/', async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

export default CartRoute;
