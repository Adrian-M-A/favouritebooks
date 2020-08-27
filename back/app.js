import express from 'express';
import './src/config/mongoose.js';
import cors from './src/middleware/cors.js';
import usersRouter from './src/routes/users.js';
import booksRouter from './src/routes/messages.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors);
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use('/books', messagesRouter)

app.listen(PORT, () => console.log("Server running on PORT " + PORT));