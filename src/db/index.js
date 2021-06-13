import s from 'sequelize';
import productModel from '../db/product.js';
import userModel from '../db/user.js';
import cartModel from '../db/cart.js';

const Sequelize = s.Sequelize;
const DataTypes = s.DataTypes;
const { PGUSER, PGDATABASE, PGPASSWORD, PGHOST } = process.env;

const sequelize = new Sequelize({
  host: PGHOST,
  dialect: 'postgres',
});

const test = async () => {
  try {
    await sequelize.authenticate();
    console.log(' ✅ Connection is working');
  } catch (error) {
    console.log('❌ Unable to connect', error);
  }
};

const model = {
  Product: productModel(sequelize, DataTypes),
  User: userModel(sequelize, DataTypes),
  Cart: cartModel(sequelize, DataTypes),
  sequelize: sequelize,
};
model.User.belongsToMany(model.Product, {
  through: { model: model.Cart, unique: false },
});
model.Product.belongsToMany(model.User, {
  through: { model: model.Cart, unique: false },
});

model.User.hasMany(model.Cart);
model.Cart.belongsTo(model.User);

model.Product.hasMany(model.Cart);
model.Cart.belongsTo(model.Product);

test();

export default model;
