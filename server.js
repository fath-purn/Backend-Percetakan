import Express from "express";
import cors from "cors";
import FileUpload from "express-fileupload";
import ProductsRoute from './routes/ProductRoute.js';

const app = Express();
app.use(cors());
app.use(FileUpload());
app.use(Express.json());
app.use(ProductsRoute);

app.use(Express.static('public'));

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App launcher on ${PORT}`);
});
