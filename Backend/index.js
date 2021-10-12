const express = require('express');
const app = express();
const routes = require('./routes');
const morgan = require('morgan');
const mongoose = require('mongoose');
const dbConfig = require('./config/db')

app.use(express.json())
/*express.json()es un método incorporado en express para reconocer el objeto */

mongoose.connect(dbConfig.dbStringConnect)
    .then(db => console.log("db connected"))
    .catch(err => console.error(err))
/*se hace la conexion a la BD de Mongo*/

const port = 3001;


app.use(morgan("dev"));
/* Morgan es un middleware que nos ayudará a identificar a 
los clientes que acceden a nuestra aplicación. Básicamente un registrador.*/

app.get('/', (req, res) => {
    res.json({ status: 200 });
})

app.use('/productos', routes.productsRoutes);
app.use('/ventas', routes.salesRoutes);
app.use('/usuarios', routes.usersRoutes);

app.listen(port, () => {
    console.log(`listening on port http://localhost:${port}`);
});
