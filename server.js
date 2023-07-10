import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import FileUpload from "express-fileupload";
import Route from './routes/Route.js';
<<<<<<< HEAD
import UserLogin from "./controllers/UserController.js";
=======
import routerAuth from "./middlewares/auth.js";
>>>>>>> cc22f5a81257e69d61693df6af83b38d9cd2f487

const app = express();
app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(Route);
<<<<<<< HEAD
app.use(UserLogin);
=======
app.use(routerAuth);
>>>>>>> cc22f5a81257e69d61693df6af83b38d9cd2f487

app.use(express.static('public'));

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App launcher on ${PORT}`);
});
