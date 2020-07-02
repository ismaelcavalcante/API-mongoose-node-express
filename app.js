import express from 'express';
import { routers } from './routes/studentRouter.js';
import mongoose from 'mongoose';

//Conectar ao MongoDb pelo Mongoose
(async () => {
  try {
    await mongoose.connect(process.env.DB_BASEDATA, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    console.log('Erro ao conectar ao MongoDB: ', err);
  }
})();

const app = express();

app.use(express.json());
app.use(routers);

app.listen(3000, () => console.log('API Iniciada'));
