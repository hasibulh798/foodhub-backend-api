import { Request, Response } from "express";
import { categoryService } from "./categories.service";

// Create category
const createCategory = async (req: Request, res: Response) => {
  try {
    const result = await categoryService.createCategory(req.body);

    if (result === null) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }
    return res.json({
      success: true,
      message: "Category created successfully",
      data: result,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: "Failed to create category",
      error: error.message,
    });
  }
};

//Get All Category
const getAllCategory = async (req: Request, res: Response) => {
  try {
    const result = await categoryService.getAllCategory();

    return res.json({
      success: true,
      message: "Category fetched successfully",
      data: result,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: "Failed to create category",
      error: error.message,
    });
  }
};

// Get a single category
const getSingleCategory = async (req: Request, res: Response) => {
  try {
    const { catId } = req.params;
    const userId = req.user?.id;

    const result = await categoryService.getSingleCategory(
      catId as string,
      userId as string,
    );

    if (result === null) {
      return res.status(404).json({
        success: false,
        message: "category not found",
      });
    }
    return res.json({
      success: true,
      message: "Category fetched successfully",
      data: result,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetche category",
      error: error.message,
    });
  }
};

//provider specific category
const getProvidersCategory = async (req: Request, res: Response) => {
  try {

    const {providerId} = req.params;

    const result = await categoryService.getProvidersCategory(
      providerId as string,
    );

    return res.json({
      success: true,
      message: "Category fetched successfully",
      data: result,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetche category",
      error: error.message,
    });
  }
};


//Update category
const updateCategory = async (req: Request, res: Response) => {
  try {
    const { catId } = req.params;
    const userId = req.user?.id;
    const result = await categoryService.updateCategory(
      req.body,
      catId as string,
      userId as string,
    );

    if (result === null) {
      return res.status(404).json({
        success: false,
        message: "category not found",
      });
    }
    return res.json({
      success: true,
      message: "Category updated successfully",
      data: result,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: "Failed to update category",
      error: error.message,
    });
  }
};

// Delete category
const deleteCategory = async (req: Request, res: Response) => {
  try {
    const { catId } = req.params;
    const userId = req.user?.id;
    const result = await categoryService.deleteCategory(
      catId as string,
      userId as string,
    );

    return res.json({
      success: true,
      message: "Category deleted successfully",
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: "Failed to delete category",
      error: error.message,
    });
  }
};

export const categoryController = {
  createCategory,
  getAllCategory,
  getSingleCategory,
  getProvidersCategory,
  updateCategory,
  deleteCategory,
};
