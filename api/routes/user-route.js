import express from "express";
import { verifyToken } from "../utils/verify.js";
import { updateUser ,deleteUser} from "../controllers/usr-controller.js";

const router = express.Router();

router.post('/update/:id',verifyToken, updateUser);
router.delete('/delete/:id', verifyToken,deleteUser);



export default router;