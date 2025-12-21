/**
 * -------------------------------------------------------------
 * API Routes Configuration
 * -------------------------------------------------------------
 * This file defines all RESTful API routes for the application
 * using Express Router. It acts as a centralized routing layer
 * that maps HTTP endpoints to their respective controller
 * methods.
 * -------------------------------------------------------------
 */


import express from "express";
const router = express.Router();

import * as CategoryController from "../app/controllers/CategoryController.js";
import * as BrandController from "../app/controllers/BrandController.js";
import * as SignupController from "../app/controllers/SignupController.js";
import * as SigninController from "../app/controllers/SigninController.js";
import * as UserController from "../app/controllers/UserController.js";
import * as ForgetPasswordController from "../app/controllers/ForgetPasswordController.js";

/**
 * ---------------------------------------------------------------------
 * Brand Management Routes
 * ---------------------------------------------------------------------
 * These routes handle all CRUD operations related to product brands.
 * 
 * Responsibilities:
 * - Retrieve a list of all available brands
 * - Create a new brand
 * - View details of a specific brand by ID
 * - Update brand information
 * - Permanently delete a brand
 * - Soft delete a brand (logical deletion without removing data)
 *
 * HTTP Methods Used:
 * - GET, POST, PUT, DELETE, PATCH
 * ---------------------------------------------------------------------
 */
router.get("/brand-list", BrandController.index);
router.post("/add-brand", BrandController.create);
router.get("/select-brand/:id", BrandController.show);
router.put("/update-brand/:id", BrandController.update);
router.delete("/remove-brand/:id", BrandController.remove);
router.patch("/brand-soft-delete/:id", BrandController.softDelete);

/**
 * ---------------------------------------------------------------------
 * Category Management Routes
 * ---------------------------------------------------------------------
 * These routes manage product categories within the application.
 *
 * Responsibilities:
 * - Fetch all categories
 * - Add a new category
 * - View a category by its unique ID
 * - Update category details
 * - Remove a category permanently
 * - Soft delete a category for reversible removal
 *
 * Designed to support structured product classification.
 * ---------------------------------------------------------------------
 */
router.get("/category-list", CategoryController.index);
router.post("/add-category", CategoryController.create);
router.get("/select-category/:id", CategoryController.view);
router.put("/update-category/:id", CategoryController.update);
router.delete("/delete-category/:id", CategoryController.remove);
router.patch("/category-soft-delete/:id", CategoryController.softDelete);

/**
 * ---------------------------------------------------------------------
 * Authentication Routes (Signup & Signin)
 * ---------------------------------------------------------------------
 * These routes handle user authentication and account creation.
 *
 * Responsibilities:
 * - Register a new user account (Signup)
 * - Authenticate existing users and issue access credentials (Signin)
 *
 * Security Considerations:
 * - Input validation
 * - Password hashing
 * - Token-based authentication (JWT or similar)
 * ---------------------------------------------------------------------
 */

router.post("/signup", SignupController.signupUser);
router.post("/signin", SigninController.signinUser);

/**
 * ---------------------------------------------------------------------
 * User Profile Routes
 * ---------------------------------------------------------------------
 * These routes allow authenticated users to manage their profile data.
 *
 * Responsibilities:
 * - View logged-in user's profile information
 * - Update user profile details such as name, email, or other metadata
 *
 * Note:
 * - These routes should be protected using authentication middleware.
 * ---------------------------------------------------------------------
 */
// router.get("/view-prifile", "UserController.viewProfile");
// router.put("/update-profile", "UserController.updateProfile");

/**
 * ---------------------------------------------------------------------
 * Password Recovery Routes
 * ---------------------------------------------------------------------
 * These routes implement the complete password recovery workflow.
 *
 * Responsibilities:
 * - Initiate password reset request via email
 * - Verify user email address
 * - Validate OTP (One-Time Password)
 * - Update user password securely
 *
 * Security Measures:
 * - OTP expiration
 * - Rate limiting
 * - Secure password hashing
 * ---------------------------------------------------------------------
 */
router.post("/forget-password", ForgetPasswordController.forgetPassword);
router.post("/verify-email", ForgetPasswordController.verifyEmail);
router.post("/verify-otp", ForgetPasswordController.verifyOtp);
router.put("/update-password", ForgetPasswordController.updatePassword);

export default router;