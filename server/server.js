import express from "express";
import connectDB from './config/db.js';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 6000;
connectDB();

app.use(express.json({ extended: false }))

app.get('/', (req, res) => {
    res.send('API is running!!!!!!!!')
})


app.listen(PORT, () => {
    console.log(`Server started at PORT : ${PORT}`)
})