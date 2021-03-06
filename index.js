import express from "express";
import cors from "cors";
import winston from "winston";
import autoresRouter from "./routes/autores.router.js"
import livrosRouter from "./routes/livros.router.js"
import clientesRouter from "./routes/clientes.router.js"
// import vendasRouter from "./routes/vendas.router.js"
import format from "logform";

const { combine, timestamp, label, printf } = winston.format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp}, [${label}], ${level}, ${message}`;
});
global.logger = winston.createLogger({
  level: "silly",
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "desafioFinal.log" }),
  ],
  format: combine(label({ label: "final_api" }), timestamp(), myFormat),
});

const app = express();
app.use(express.json());
app.use(cors());
app.use("/clientes", clientesRouter);
// app.use("/vendas", vendasRouter);
app.use("/livros", livrosRouter);
app.use("/autores", autoresRouter);

app.use((err, req, res, next) => {
  logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
  res.status("400").send({ error: err.message });
});

app.listen(3202, () => {
  console.log("API STARTED");
});
