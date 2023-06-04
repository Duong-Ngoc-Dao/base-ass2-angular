import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import routerAthu from './routers/auth'
import routerUsers from './routers/users'
import routerLocation from './routers/locations'



const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', routerAthu)
app.use('/api', routerUsers)
app.use('/api', routerLocation)



mongoose.connect("mongodb://127.0.0.1:27017/angular-node");

export const viteNodeApp = app;
