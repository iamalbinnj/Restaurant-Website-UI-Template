import { Request, Response, NextFunction } from "express";

export const validateCategory = (req: Request, res: Response, next: NextFunction): void => {
  const { name } = req.body;

  if (!name || typeof name !== "string" || name.trim() === "") {
    res.status(400).json({ message: "Invalid category name" });
    return;
  }

  next();
};
