import { Router } from "express";
import { createCategory, getAllCategories, getCategories, updateCategory, deleteCategory, deleteAllCategories } from "../controller/CategoryController";
import { validateCategory } from "../middleware/validateCategory";

const router = Router();

router.post("/", validateCategory, createCategory);
router.get("/", getAllCategories);
router.get("/:id", getCategories);
router.put("/:id", validateCategory, updateCategory);
router.delete("/:id", deleteCategory);
router.delete("/", deleteAllCategories);


export default router;
