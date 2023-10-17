import express  from "express";
import dotenv from 'dotenv'
import mongoose from 'mongoose'
// import cors from 'cors'
import cookieParser from "cookie-parser";
import tourRoute from './routes/tours.js'
// import userRoute from './routes/users.js'
import authRoute from './routes/auth.js'
import reviewRoute from './routes/reviews.js'
import bookingRoute from './routes/bookings.js'

dotenv.config()
const app = express()
const port = process.env.PORT || 8000

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://toursmern.vercel.app');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
//for testing
app.get('/', (req, res) => {
  res.send("api is working")
})

//database connection
await mongoose.connect(process.env.MONGO_URI)
// mongoose.set("strictQuery", false)
// const connect = async() => {
//    try {
//       await mongoose.connect(process.env.MONGO_URI, {
//          useNewUrlParser: true,
//          useUnifiedTopology: true
//       })

//       console.log('MongoDB connected')
//    } catch (error) {
//       console.log('MongoDB connected failed')
//    }
// }


//middleware
app.use(express.json())
app.use(cookieParser())
app.use("api/v1/auth", authRoute)
app.use("api/v1/tours", tourRoute)
app.use("api/v1/review", reviewRoute)
app.use("api/v1/booking", bookingRoute)

app.listen(port, () => {
   connect()
   console.log('server listening on port', port)
})
