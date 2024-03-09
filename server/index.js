import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors'; // Import the cors module
import authRouter from './routes/auth.route.js';
import busesRoutes from './routes/busesRoutes.js';


dotenv.config();

process.env.JWT_SECRET = 'Eshwarramsaigowtham';

mongoose.connect("mongodb+srv://busbooking:ramsai@cluster0.9kbdzzy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

// Use the CORS middleware
app.use(cors({
  origin: 'http://localhost:3001', // Adjust the origin to match your frontend URL
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
}));

app.use(express.json());

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.use('/server/auth', authRouter);
app.use('/buses', busesRoutes);


app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});