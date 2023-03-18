const express = require('express');
const mongoose = require('mongoose');
require ("dotenv").config();
const userRoutes = require("./routes/usuarios.js");
const app = express();
const port = process.env.PORT || 3001;

//middleware
app.use('/api', userRoutes)
app.use(express.json());

//routes
app.get('/', (req, res) => {
    res.send("Bienvenidos a mi API");
});

//mongo db connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("DB connection established"))
    .catch((error) => console.error(error));

app.listen(port, () => {
    console.log('port', port );
})