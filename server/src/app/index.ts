// app/index.ts
import express from "express";
import swaggerUi  from "swagger-ui-express";
import * as swaggerDocument from "./swagger.json";
import { Validation } from "../infrastructure/validation/Validation";
import serverless from "serverless-http";

import productRoutes from "./routes/ProductRoutes";



const app = express();
const port = 3000;

// SWAGGER DOCS
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Configurar middlewares y parsers aquí
app.use(express.json()); // Configurar el middleware express.json()

app.use((req, res, next) => {
  Validation.validate(req);
  next();
});

app.use("/items", productRoutes);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

export const appTest = app;


export const handler = serverless(app);