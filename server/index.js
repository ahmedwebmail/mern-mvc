import express from 'express'
import mongoose from 'mongoose'
import rateLimit from 'express-rate-limit'
import helmet from 'helmet'
import hpp from 'hpp'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import router from './routes/api.js'
import { DB_CONN, MAX_JSON_SIZE, PORT, REQ_LIMIT_NUM, REQ_LIMIT_TIME, URL_ENCODE, WEB_CACHE } from './app/config/config.js'

//Create object of express
const app = express()

//Implement security
app.use(cors())
app.use(helmet())
app.use(hpp())
app.use(cookieParser())

//Request size limit
app.use(express.json({limit: MAX_JSON_SIZE}))

//Request rate limit
const limiter = rateLimit({windowMs: REQ_LIMIT_TIME, max: REQ_LIMIT_NUM})
app.use(limiter)

//Encode URL
app.use(express.urlencoded({extended: URL_ENCODE}))

//Web cache
app.set('etag', WEB_CACHE)

//Database connection
mongoose.connect(DB_CONN, {autoIndex: true})
    .then(()=>{
        console.log("Database connected")
    })
    .catch((error)=>{
        console.log("Connection Error", error)
    })

//Add router
app.use("/api", router)

//Run application
app.listen(PORT, ()=>{
    console.log(`Server running on port: ${PORT}`);
    
})