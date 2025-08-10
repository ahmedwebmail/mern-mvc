/**
 * - The `express` module is a minimal and flexible Node.js web application framework
 * - `require('express')` loads the Express library.
 * - `const app = express()` creates an instance of the Express application,
 *   which will be used to define routes, middleware, and server configurations.
 */
const express = require('express')
const app = express()

/**
 * Defining API endpoints for different HTTP methods using Express.
 * - GET    `/one`    : Returns a simple text response for GET requests.
 */

app.get("/one", (req, res)=>{
    res.end("This is get from page one")
});

/**
 * Defining API endpoints for different HTTP methods using Express.
 * - POST   `/two`    : Returns a simple text response for POST requests.
 */

app.post("/two", (req, res)=>{
    res.end("This is page two from post")
});

/**
 * Defining API endpoints for different HTTP methods using Express.
 * - POST   `/two`    : Returns a simple text response for POST requests.
 */
app.put("/three", (req, res)=>{
    res.end("This is page three from put")
});

/**
 * Defining API endpoints for different HTTP methods using Express.
 * - PUT    `/three`  : Returns a simple text response for PUT requests.
 */
app.patch("/four", (req, res)=>{
    res.end("This is page four from patch")
});

/**
 * Defining API endpoints for different HTTP methods using Express.
 *
 * - DELETE `/five`   : Returns a simple text response for DELETE requests.
 */
app.delete("/five", (req, res)=>{
    res.end("This is page five from delete")
});

/**
 * Starts the Express server and listens for incoming requests on the specified port.
 * - `app.listen(3000, ...)` binds and listens for connections on port 3000.
 */

app.listen(3000, ()=>{
    console.log("Server is running on port")
})