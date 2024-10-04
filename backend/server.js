const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const dotenv = require('dotenv');
const helmet = require('helmet');
const jwt = require('jsonwebtoken');
const authRoutes = require('./routes/auth');
const auth=require('./middleware/auth');
const Appointment=require("./model/appointment")
// Load config
dotenv.config();

const app = express();

// Connect to database
connectDB();

// CORS configuration


// Middleware
app.use(cors());
app.use(express.json());
app.use(helmet());

// Define routes
app.use('/api/auth', authRoutes);
// Appointments routes
app.post('/api/appointments', auth, async (req, res) => {

    const { fullName, email, phone, appointmentDate, appointmentTime, healthIssue } = req.body;
    try {
        console.log(req.user.id);
        if (!req.user || !req.user.id) {
            return res.status(401).json({ message: 'User ID is required' });
        }
        const newAppointment = new Appointment({
            user: req.user.id, // Ensure you're getting the user ID here
            fullName,
            email,
            phone,
            appointmentDate,
            appointmentTime,
            healthIssue,
        });

        await newAppointment.save();
        res.status(201).json({ message: 'Appointment created successfully!' });
    } catch (error) {
        console.error('Error creating appointment:', error);
        res.status(500).json({ message: 'Failed to create appointment.', error: error.message });
    }
});

// Centralized error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Server Error', error: err.message });
});

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('SIGINT received. Shutting down gracefully...');
    process.exit(0);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
