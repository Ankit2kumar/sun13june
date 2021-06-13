import { Router, text } from 'express';
import model from '../../db/index.js';

const Product = model.Product;

const productRoute = Router();

productRoute.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll({});
    res.status(200).send(products);
  } catch (error) {
    next(error);
  }
});
productRoute.get('/:brand', async (req, res, next) => {
  try {
    // const category = req.params.category;
    const product = await Product.findAll({
      where: req.params.brand ? { brand: req.params.brand } : {},
    });
    res.status(200).send(product);
  } catch (error) {
    next(error);
  }
});
productRoute.get('/:id', async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).send(product);
  } catch (error) {
    next(error);
  }
});
productRoute.post('/', async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).send(product);
  } catch (error) {
    next(error);
  }
});
productRoute.put('/:id', async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});
productRoute.delete('/', async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

export default productRoute;
