/**
 * --------------------------------------------------------
 * Application & Dependency Initialization
 * --------------------------------------------------------
 * This section imports core framework libraries and
 * third-party middleware required for building a secure,
 * scalable, and production-ready Express application.
 *
 * - express: Core web framework
 * - cors: Enables Cross-Origin Resource Sharing
 * - express-rate-limit: Protects API from brute-force attacks
 * - helmet: Secures HTTP headers
 * - mongoose: ODM for MongoDB database interaction
 * - config settings: Centralized environment configuration
 * --------------------------------------------------------
 */
import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import mongoose from "mongoose";
import { DB_CONNECTION, PORT, WEB_CACHE, MAX_JSON_SIZE, REQUEST_TIME, REQUEST_NUM, URL_ENCODE } from "./app/config/settings.js";
import router from "./routes/api.js";

/**
 * --------------------------------------------------------
 * Express Application Instance
 * --------------------------------------------------------
 * Creates and initializes the Express application object
 * which serves as the central middleware and routing hub
 * for handling incoming HTTP requests and responses.
 * --------------------------------------------------------
 */
const app = express();

/**
 * --------------------------------------------------------
 * Global Middleware Configuration
 * --------------------------------------------------------
 * Applies application-wide middleware to enhance security,
 * performance, and request handling:
 *
 * - CORS: Allows cross-origin requests
 * - JSON & URL Encoded Parsers: Handles request payloads
 *   with size limits to prevent large payload attacks
 * - Helmet: Adds multiple security-related HTTP headers
 * --------------------------------------------------------
 */
app.use(cors());
app.use(express.json({ limit: MAX_JSON_SIZE }));
app.use(express.urlencoded({ extended: URL_ENCODE }));
app.use(helmet());

/*
 * --------------------------------------------------------
 * API Rate Limiting
 * --------------------------------------------------------
 * Configures request rate limiting to mitigate abuse,
 * brute-force attacks, and denial-of-service attempts.
 *
 * - windowMs: Time window for rate limit
 * - max: Maximum number of requests allowed per IP
 * --------------------------------------------------------
 */
const limiter = rateLimit({
    windowMs: REQUEST_TIME,
    max: REQUEST_NUM,
});
app.use(limiter);

/**
 * --------------------------------------------------------
 * HTTP Cache Configuration
 * --------------------------------------------------------
 * Enables or disables ETag-based caching for HTTP responses.
 * This improves performance by reducing redundant data
 * transfer when resources remain unchanged.
 * --------------------------------------------------------
 */
app.set('etag', WEB_CACHE);

/**
 * --------------------------------------------------------
 * MongoDB Database Connection
 * --------------------------------------------------------
 * Establishes a connection to the MongoDB database using
 * Mongoose with automatic index creation enabled.
 *
 * Logs successful connection or reports errors during
 * database initialization.
 * --------------------------------------------------------
 */
mongoose.connect(DB_CONNECTION, {autoIndex: true}).then(()=>{
    console.log("Database connected successfully");
}).then((err)=>{
    console.log("Database connection failed: "+ err);
});

/**
 * --------------------------------------------------------
 * API Routing
 * --------------------------------------------------------
 * Registers the main API router and prefixes all routes
 * with `/api` to maintain a clean and modular route structure.
 * --------------------------------------------------------
 */

app.use("/api", router);

/**
 * --------------------------------------------------------
 * Server Initialization
 * --------------------------------------------------------
 * Starts the Express server on the configured port and
 * listens for incoming client requests.
 *
 * Logs server status to confirm successful startup.
 * --------------------------------------------------------
 */
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});