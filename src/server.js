// Importando as dependências
const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const enableHotReload = require("./hot-reload");

// Puxando os controladores da aplicação
const homeRouter = require("./routes/homeRoute");
const menuRouter = require("./routes/menuRoute");
const loginRouter = require("./routes/loginRoute");
const criarContaRouter = require("./routes/criarContaRoute");
const carrinhoRouter = require("./routes/carrinhoRoute");
const reservaRouter = require("./routes/reservaRouter");

// Chamando o express
const app = express();

// Configurações do body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// Configurações do seu app Express
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

console.log("Views path set to:", path.join(__dirname, "views"));

// Configuração de pasta pública
app.use(express.static(path.join(__dirname, "public")));

// Habilitar hot-reload
enableHotReload(app);

// Rotas das paginas
app.use("/", homeRouter);
app.use("/", menuRouter);
app.use("/", loginRouter);
app.use("/", criarContaRouter);
app.use("/", carrinhoRouter);
app.use("/", reservaRouter);

// Inicie o servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});