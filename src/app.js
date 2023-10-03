import express from "express";
const exphbs = require("express-handlebars");

const app = express();

import conn from "../db/conn";

//importar tabelas para criação do bd
import Animal from "../models/Animal";
import Vacina from "../models/Vacina";

// importar rotas
import animalsRouter from "../routes/animalsRouter";
import vacinaRouter from "../routes/vacinaRouter";

//configurar handlebars
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

//configurar req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// arquivos static
app.use(express.static("public"));

//configurar rotas animals
app.use("/animals", animalsRouter);

//configurar rota vacinas
app.use("/animals/vacinas", vacinaRouter);

conn
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
