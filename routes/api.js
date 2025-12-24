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
import * as CartListController from "../app/controllers/CartListController.js";
import * as ProductController from "../app/controllers/ProductController.js";
// import * as InvoiceController from "../app/controllers/InvoiceController.js";
// import * as WishListController from "../app/controllers/WishListController.js";
import * as SignupController from "../app/controllers/SignupController.js";
import * as SigninController from "../app/controllers/SigninController.js";
import * as UserController from "../app/controllers/UserController.js";
// import * as ForgetPasswordController from "../app/controllers/ForgetPasswordController.js";

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
router.get("/brand-list", BrandController.brandList);
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
router.get("/category-list", CategoryController.categoryList);
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
router.post("/verify-login", SigninController.verifyLogin);

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
router.get("/view-profile", UserController.viewProfile);
router.put("/update-profile/:id", UserController.updateProfile);
router.post("/create-profile", UserController.createProfile);

/**
 * ---------------------------------------------------------
 * Cart Management Routes
 * ---------------------------------------------------------
 * This section defines all RESTful API endpoints related to
 * shopping cart operations.
 *
 * Responsibilities:
 * - Add products to the user's cart
 * - Retrieve all cart items
 * - View details of a specific cart item
 * - Update quantity or attributes of a cart item
 * - Remove items from the cart
 *
 * Architecture:
 * - Routes delegate business logic to CartListController
 * - Controller handles validation, database interaction,
 *   and response formatting
 *
 * HTTP Methods Used:
 * - POST    : Create new cart entry
 * - GET     : Read cart data
 * - PUT     : Update existing cart item
 * - DELETE  : Remove cart item
 *
 * URL Design:
 * - Follows RESTful API conventions
 * - Uses route parameters for cart item identification
 *
 * Security & Scalability:
 * - Can be extended with authentication middleware
 * - Designed for modular expansion (e.g., coupons, checkout)
 * ---------------------------------------------------------
 */
router.post("/add-to-cart", CartListController.create);
// router.get("/cart-list", CartListController.car);
// router.get("/view-cart/:id", CartListController.show);
// router.put("/update-cart/:id", CartListController.update);
// router.delete("/remove-cart/:id", CartListController.remove);

/**
 * --------------------------------------------------------------------------
 * Wishlist Management Routes
 * --------------------------------------------------------------------------
 * This section defines all RESTful API endpoints related to wishlist
 * operations. These routes handle the complete lifecycle of a wishlist,
 * including creation, retrieval, modification, and deletion.
 *
 * Responsibilities:
 * - Fetch the user's wishlist data from the system
 * - Create a new wishlist entry
 * - Update an existing wishlist by its unique identifier
 * - Remove a wishlist permanently from the database
 *
 * Design Notes:
 * - Follows REST API best practices using appropriate HTTP methods
 * - Business logic is delegated to the WishListController
 * - Route parameters are used to uniquely identify wishlist resources
 *
 * Endpoints:
 * - GET    /wish-list                 → Retrieve all wishlist items
 * - POST   /create-wish-list          → Create a new wishlist
 * - PUT    /update-wish-list/:id      → Update an existing wishlist by ID
 * - DELETE /delete-wish-list/:id      → Delete a wishlist by ID
 * --------------------------------------------------------------------------
 */
// router.get('/wish-list', WishListController.getWishList);
// router.post('/create-wish-list', WishListController.createWishList);
// router.put('/update-wish-list/:id', WishListController.updateWishList);
// router.delete('/delete-wish-list/:id', WishListController.deleteWishList);

/**
 * ---------------------------------------------------------
 * Product Management & Review Routes
 * ---------------------------------------------------------
 * This section defines all RESTful API endpoints related to
 * product lifecycle management and user interactions.
 *
 * Functional Coverage:
 * - Create, read, update, and delete (CRUD) operations
 * - Soft deletion for reversible product removal
 * - Product filtering based on category and brand
 * - Product review creation and retrieval
 *
 * API Design Notes:
 * - Uses HTTP methods according to REST standards
 * - Route parameters are used for dynamic resource access
 * - Separation of concerns is maintained via ProductController
 *
 * Controllers:
 * - ProductController handles all business logic and data access
 *
 * Base Route:
 * - /product
 *
 * Security & Scalability:
 * - Can be extended with authentication, authorization,
 *   validation middleware, and rate limiting
 *
 * ---------------------------------------------------------
 */
router.get("/product-list-by-slider", ProductController.productListBySlider);
// router.get('/product-by-category/:category_id', ProductController.getProductsByCategory);
router.get('/product-list-by-brand/:brand_id', ProductController.productListByBrand);
router.get('/product-list-by-keyword/:keyword', ProductController.productListBykeyword);
// router.get('/product-list-by-review/:id', ProductController.getProductsByReview);
router.get("/get-product-review/:product_id", ProductController.getProductsReviewListByID);

/**
 * -------------------------------------------------------------
 * Invoice Management Routes
 * -------------------------------------------------------------
 * This section defines all API endpoints related to invoice
 * operations within the system.
 *
 * Routes included:
 * 1. POST /create-invoice
 *    - Creates a new invoice based on the request payload.
 *    - Handles validation, business logic, and persistence.
 *
 * 2. GET /invoice-list
 *    - Retrieves a list of all invoices.
 *    - Can be extended to support pagination, filtering,
 *      and sorting in the future.
 *
 * 3. GET /view-invoice/:id
 *    - Fetches detailed information for a single invoice
 *      using the invoice ID as a route parameter.
 *
 * All routes delegate request handling to the InvoiceController
 * to maintain separation of concerns and cleaner routing logic.
 * -------------------------------------------------------------
 */
// router.post("/create-invoice", InvoiceController.createInvoice);
// router.get("/invoice-list", InvoiceController.invoiceList);
// router.get("/view-invoice/:id", InvoiceController.showSingleInvoice);

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
// router.post("/forget-password", ForgetPasswordController.forgetPassword);
// router.post("/verify-email", ForgetPasswordController.verifyEmail);
// router.post("/verify-otp", ForgetPasswordController.verifyOtp);
// router.put("/update-password", ForgetPasswordController.updatePassword);

export default router;