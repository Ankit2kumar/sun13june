import s from 'sequelize'
import  product from '../db/product.js'
import  user from '../db/user.js'

const Sequelize = s.Sequelize;
const DataTypes = s.DataTypes;
const { PGUSER, PGDATABASE, PGPASSWORD, PGHOST } = process.env;

const sequelize = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
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

const models= {
  product: productModel(sequelize, DataTypes),
  user: userModel(sequelize, DataTypes),
  sequelize: sequelize
}
models.product.belongsToMany(models.user);
models.user.belongsToMany(models.product);

export default test