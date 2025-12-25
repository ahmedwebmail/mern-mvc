
/**
 * =====================================================
 * Application Configuration File
 * =====================================================
 * This file contains all global configuration constants
 * used throughout the application, including server,
 * database, authentication, email, security, request
 * handling, and payment gateway settings.
 *
 * NOTE:
 * - Sensitive values (JWT keys, DB credentials, API keys)
 *   should be stored in environment variables in production.
 * - Do NOT commit real secrets to version control.
 * =====================================================
 */

/* -----------------------------------------------------
 * Server Configuration
 * -----------------------------------------------------
 * PORT            : Application listening port
 */
export const PORT                       = 5050;

/* -----------------------------------------------------
 * Database Configuration
 * -----------------------------------------------------
 * DB_HOST         : Database host address
 * DB_CONNECTION   : MongoDB connection string
 */
export const DB_HOST                    = '127.0.0.1';
export const DB_CONNECTION              = 'mongodb+srv://admin:admin@cluster0.nx8kf.mongodb.net/basarbazzar?retryWrites=true&w=majority';

/* -----------------------------------------------------
 * Authentication & Security Configuration
 * -----------------------------------------------------
 * JWT_KEY         : Secret key used for JWT signing
 * JWT_EXPIRE_TIME : Token expiration time (in seconds)
 */
export const JWT_KEY                    = '42f5e8c9-8b3a-4d2a-9f1e-3c6b7d9e2f1a';
export const JWT_EXPIRE                 = 30*24*60*60; 


/* -----------------------------------------------------
 * Email (SMTP) Configuration
 * -----------------------------------------------------
 * EMAIL_HOST : SMTP server host
 * EMAIL_PORT : SMTP server port
 * EMAIL_USER : Email account username
 * EMAIL_PASS : Email account password
 * EMAIL_FROM : Default sender email address
 */
export const EMAIL_HOST     = 'sandbox.smtp.mailtrap.io';
export const EMAIL_PORT     = '2525';
export const EMAIL_USER     = '167164c14351da';
export const EMAIL_PASS     = 'a55e77324bea30';
export const EMAIL_SECURITY =  'TLS'

/* -----------------------------------------------------
 * Request & Performance Configuration
 * -----------------------------------------------------
 * WEB_CACHE     : Enable/disable web caching
 * MAX_JSON_SIZE : Maximum JSON payload size (bytes)
 * URL_ENCODE    : Enable URL-encoded request parsing
 * REQUEST_TIME  : Request timeout duration (ms)
 * REQUEST_NUM   : Maximum number of requests per time window
 */
export const WEB_CACHE      = false;
export const MAX_JSON_SIZE  = 10*1024 *1024; 
export const URL_ENCODE     = true; 
export const REQUEST_TIME   = 20*60*1000; 
export const REQUEST_NUM    = 2000;

/* -----------------------------------------------------
 * Payment Gateway Configuration
 * -----------------------------------------------------
 * STORE_ID       : Payment gateway store ID
 * STORE_PASSWORD : Payment gateway store password
 * SUCCESS_URL    : Redirect URL after successful payment
 * FAIL_URL       : Redirect URL after failed payment
 * CANCEL_URL     : Redirect URL after payment cancellation
 * INIT_URL       : Payment initialization endpoint
 * CURRENCY       : Transaction currency code
 */
export const STORE_ID       = "xxx"
export const STORE_PASSWORD = "xxx"
export const SUCCESS_URL    = "xx"
export const FAIL_URL       = "xx"
export const CURRENCY       = "GBP"
export const CANCEL_URL     = "xx"
export const INIT_URL       = "xx"