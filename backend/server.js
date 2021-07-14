import express from 'express'
import mongoose from 'mongoose';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';

const app = express();
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/amazon-clone', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);

app.use((err, req, res, next) => {
  res.status(500).send({
    message: err.message,
  });
});

app.get('/', (req, res) => {
  res.send('Server is ready');
});

app.listen(5000, () => {
  console.log(`Serve at http://localhost:5000`);
})