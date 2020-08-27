import express from 'express';
import './src/config/mongoose.js';
import cors from './src/middleware/cors.js';
import booksRouter from './src/routes/books.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors);
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use('/books', booksRouter)

app.listen(PORT, () => console.log("Server running on PORT " + PORT));