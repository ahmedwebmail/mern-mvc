/**
 * - The `express` module is a minimal and flexible Node.js web application framework
 * - `require('express')` loads the Express library.
 * - `const app = express()` creates an instance of the Express application,
 *   which will be used to define routes, middleware, and server configurations.
 */
const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    res.cookie("cookie_01", "01")
    res.cookie("cookie_02", "02")
    res.cookie("cookie_03", "03")
    res.cookie("cookie_04", "04")
    res.cookie("cookie_05", "05")

    res.header("header_01", "01")

    res.end("this is simple string")
})

app.get('/custom-req', (req, res)=>{
    let Person = [
        {name: "Ahmed", city: "Dhaka", occupation: "Engineer"}
    ]

    res.append("name", "Khaled Ahmed")
    res.json(Person)
})

app.get('/clear-cookie', (req, res)=>{
    res.clearCookie("cookie_01")
    res.end("Cleared")
})

app.listen(3000, ()=>{
    console.log("Server is running on port")
})

