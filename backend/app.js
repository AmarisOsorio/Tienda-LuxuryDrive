import express from "express";

import brandsRoute from "./src/routes/Brands.js"
import modelsRoute from "./src/routes/models.js"
import vehiclesRoute from "./src/routes/vehicles.js"

const app = express();


app.use(express.json());


app.use("/api/brands", brandsRoute);
app.use("/api/models", modelsRoute);
app.use("/api/vehicles", vehiclesRoute);







export default app;