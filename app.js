import express from 'express';
import { routers } from './routes/studentRouter.js';
import mongoose from 'mongoose';

//Conectar ao MongoDb pelo Mongoose
const { USERDB, PASSWDB, NAMEDB, PORT } = process.env;

(async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${USERDB}:${PASSWDB}@bootcampfullstack-dwnrk.mongodb.net/${NAMEDB}?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  } catch (err) {
    console.log('Erro ao conectar ao MongoDB: ', err);
  }
})();

const app = express();

app.use(express.json());
app.use(routers);

app.listen(PORT, () => console.log('API Iniciada'));
