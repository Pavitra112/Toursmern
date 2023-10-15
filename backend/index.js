import express  from "express";
import dotenv from 'dotenv'
import mongoose from 'mongoose'

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
  res.setHeader('Access-Control-Allow-Origin', 'https://toursmern.vercel.app');
  next();
});

//for testing
app.get('/', (req, res) => {
  mongoose.set("strictQuery", false)
const connect = async(res) => {
   try {
      await mongoose.connect(process.env.MONGO_URI, {
         useNewUrlParser: true,
         useUnifiedTopology: true
      })

      res.send('MongoDB connected')
   } catch (error) {
      res.send('MongoDB connected failed')
   }
}
})

//database connection
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
