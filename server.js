import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import FileUpload from "express-fileupload";
import ProductsRoute from './routes/ProductRoute.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(ProductsRoute);

app.use(express.static('public'));

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App launcher on ${PORT}`);
});
