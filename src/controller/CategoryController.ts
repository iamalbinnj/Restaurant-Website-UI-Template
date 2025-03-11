import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { Category } from "../entity/Category";

export const createCategory = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { name } = req.body;
    const category = new Category();
    category.name = name;

    await AppDataSource.getRepository(Category).save(category);
    res.status(201).json({category, message:"Category Created", "TimeStamp": Date.now()});
  } catch (error) {
    next(error);
  }
};

export const getAllCategories = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const categories = await AppDataSource.getRepository(Category).find();
    res.json({categories, "length":categories.length});
  } catch (error) {
    next(error);
  }
};

export const getCategories = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;

    const category = await AppDataSource.getRepository(Category).findOne({ where: { id: parseInt(id) } });
    if (!category) {
      res.status(404).json({ message: "Category not found" });
      return;
    }

    res.json(category);
  } catch (error) {
    next(error);
  }
};

export const updateCategory = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    let category = await AppDataSource.getRepository(Category).findOne({ where: { id: parseInt(id) } });
    if (!category) {
      res.status(404).json({ message: "Category not found" });
      return;
    }

    category.name = name;
    await AppDataSource.getRepository(Category).save(category);

    res.json({category, message: "Category Updated", "TimeStamp": Date.now()});
  } catch (error) {
    next(error);
  }
};

export const deleteCategory = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;

    const category = await AppDataSource.getRepository(Category).findOne({ where: { id: parseInt(id) } });
    if (!category) {
      res.status(404).json({ message: "Category not found" });
      return;
    }

    await AppDataSource.getRepository(Category).remove(category);
    res.json({ message: "Category deleted successfully", "TimeStamp": Date.now() });
  } catch (error) {
    next(error);
  }
};


export const deleteAllCategories = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    await AppDataSource.getRepository(Category).clear();
    res.json({ message: "All categories deleted successfully", "TimeStamp": Date.now() });
  } catch (error) {
    next(error);
  }
};