import express  from "express";
import { create, get, getAll, update ,remove} from "../controller/locations";
import { checkPermission } from "../middlewares/checkPerssion";

const router = express.Router()
router.get("/locations",getAll)
router.get("/locations/:id",get)
router.patch("/locations/:id", checkPermission,update)
router.post("/locations",checkPermission, create)
router.delete("/locations/:id",checkPermission ,remove)

export default router