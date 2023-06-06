import express from "express";
import { create, get, getAll, remove, update } from "../controller/products";


const routes = express.Router();
routes.get("/products", getAll)
routes.get("/products/:id", get)
routes.post("/products", create)
routes.patch("/products/:id", update)
routes.delete("/products/:id", remove)
export default routes