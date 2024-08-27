const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./models/database');
const cors = require('cors');

const developerRouter = require('./router/developerRouter') ;

// Load environment variables
dotenv.config(); 

// Connect to MongoDB
connectDB();

const app = express();

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors()) ;

// Sample Route
app.use('/developer',developerRouter);

// Import Routes
// For example: const userRoutes = require('./routes/userRoutes');
// app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
