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

    let Person= [
      {
        "name": "Alice Johnson",
        "city": "New York",
        "occupation": "Software Engineer",
        "email": "alice.johnson@example.com"
      },
      {
        "name": "Brian Smith",
        "city": "Los Angeles",
        "occupation": "Graphic Designer",
        "email": "brian.smith@example.com"
      },
      {
        "name": "Catherine Lee",
        "city": "Chicago",
        "occupation": "Data Analyst",
        "email": "catherine.lee@example.com"
      },
      {
        "name": "David Martinez",
        "city": "Houston",
        "occupation": "Marketing Manager",
        "email": "david.martinez@example.com"
      },
      {
        "name": "Emily Davis",
        "city": "Seattle",
        "occupation": "UX Designer",
        "email": "emily.davis@example.com"
      }
    ]
    res.append("name", "Ahmed")
    res.append("city", "Dhaka")

    res.cookie("C1", "Cookie 1")
    res.cookie("C2", "Cookie 2")
    res.cookie("C3", "Cookie 3")
    res.cookie("C4", "Cookie 4")

    res.status(200).json(Person)
});

app.get("/download", (req, res)=>{
    res.download("file.txt")
})

app.get("/redirect", (req, res)=>{
    res.redirect("/one")
})

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

app.get("/five", (req, res)=>{

});

/**
 * Starts the Express server and listens for incoming requests on the specified port.
 * - `app.listen(3000, ...)` binds and listens for connections on port 3000.
 */

app.listen(3000, ()=>{
    console.log("Server is running on port")
})