import express from 'express';
import cors from 'cors';
import listEndpoints from 'express-list-endpoints';
import db from './db/index.js';
import productRoute from './services/products/index.js';
import CartRoute from './services/cart/index.js';

const port = process.env.PORT;
const server = express();

server.use(express.json());

server.use('/products', productRoute);
server.use('/cart', CartRoute);

console.table(listEndpoints(server));

db.sequelize
  .sync({ force: false }) //LONG MESSAGE FROM CREATING DATABASES, HOW TO GET RID OF IT
  .then(() => {
    server.listen(port, () => console.log('Port is running on:', port));
    server.on('error', (error) =>
      console.log('Server is not running', error.message)
    );
  })
  .catch((error) => {
    console.log(error);
  });
