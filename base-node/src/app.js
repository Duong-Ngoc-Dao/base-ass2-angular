import express from "express";
import mongoose from "mongoose";
import routesProduct from "./routers/products";

const app = express();

app.use(express.json());
app.use("/api",routesProduct);

mongoose.connect('mongodb://127.0.0.1:27017/angular_node');

export const viteNodeApp = app;
