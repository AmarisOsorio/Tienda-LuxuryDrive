import express from "express";

import brandsRoute from "./src/routes/Brands.js"
import modelsRoute from "./src/routes/models.js"
import vehiclesRoute from "./src/routes/vehicles.js"
import branchesRoute from "./src/routes/branches.js"
import stockRoute from "./src/routes/stock.js"
import RoleRoute from "./src/routes/Role.js"
import EmployeesRoute from "./src/routes/employees.js";

const app = express();


app.use(express.json());


app.use("/api/brands", brandsRoute);
app.use("/api/models", modelsRoute);
app.use("/api/vehicles", vehiclesRoute);
app.use("/api/branches", branchesRoute);
app.use("/api/stock", stockRoute);
app.use("/api/Role", RoleRoute);
app.use("/api/Employees", EmployeesRoute)







export default app;