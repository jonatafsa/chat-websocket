import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN || "*" }));

app.use(helmet());

app.use(express.json());

app.use(morgan("dev"));

app.post("/login", (req, res, next) => {
  //Gerar string aleatória
  function geraToken() {
    var newString = "";
    var chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 15; i++) {
      newString += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    console.log(newString);
    return newString;
  }

  const token = geraToken();

  res.json({ token, user: req.body.user });
});

app.get("/", (req, res) => {
  return res.json({ myApp: "**Aqui é meu humilde APP back-end!!" });
});

export default app;
