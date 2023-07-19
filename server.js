import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import FileUpload from "express-fileupload";
// import Route from './routes/Route.js';
// import UserLogin from "./controllers/UserController.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use(Route);
// app.use(UserLogin);

app.use(express.static('public'));








var PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App launcher on ${PORT}`);
});
