import express from "express";
import env from "dotenv";
import cors from 'cors';

const app = express();
env.config();

// Enable CORS for all routes
app.use(cors());

app.get('/getData', (req, res) => {
  
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
