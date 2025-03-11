import { Router } from "express";
import methodOverride from "method-override";

import { createCategory, getAllCategories, getCategories, updateCategory, deleteCategory, deleteAllCategories } from "../controller/CategoryController";
import { validateCategory } from "../middleware/validateCategory";

const router = Router();
router.use(methodOverride("_method"));


router.post("/categories", validateCategory, createCategory);
router.get("/", getAllCategories);
router.get("/categories/:id", getCategories);
router.put("/categories/:id", validateCategory, updateCategory);
router.delete("/categories/:id", deleteCategory);
router.delete("/categories", deleteAllCategories);


export default router;
