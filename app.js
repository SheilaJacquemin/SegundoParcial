const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const productRoutes = require('../src/routes/product.routes');

const app = express();
const port = 3000;

// MIDDLEWARE
app.use(cors())
app.use(morgan("combined"))

app.use(express.json());
app.use('/productos', productRoutes);

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});