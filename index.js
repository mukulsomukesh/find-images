const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes')
const noteRoutes = require('./routes/noteRoutes')
require('dotenv').config()
const cors = require('cors');
const { authentication } = require('./middlewares/authentication');

const app = express();

app.use(cors())
app.use(express.json());

connectDB()

app.get("/" , (req,res) => {
    res.send("Welcome")
})

app.use('/users',userRoutes);
app.use('/todos', authentication ,noteRoutes)

const PORT = process.env.PORT || 8000
app.listen(PORT,()=>{
    console.log("server is running")
})