import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO).then(() => {
    console.log("Connected to MongoDB!")
}).catch((err) => {
    console.log(err);
})

const port = 3000;

app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
})

app.use('/api/user', userRouter);