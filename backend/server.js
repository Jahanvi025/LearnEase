import express from "express";
import env from "dotenv";
import cors from 'cors';
import connectDB from './Database/connection.js';
const app = express();
import routes from "./routes/index.js"
env.config();

app.use(express.json());


// Enable CORS for all routes
app.use(cors());
app.use('/', routes);


app.get('/getData', (req, res) => {
   res.send("API is running..");
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
   connectDB()
       .then(() => {
           console.log(`Server is up running on port ${PORT} 🚀 `);
       }).catch((err) => {
       console.log('Server is running, but database connection failed', err);
   });
});
