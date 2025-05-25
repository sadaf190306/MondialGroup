const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Define Contact schema
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    mobile: String,
    message: String,
    date: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

// ✅ Combined POST Route
app.post('/api/contact', async (req, res) => {
    const { name, email, subject, mobile, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Please fill in all required fields.' });
    }

    try {
        const newContact = new Contact({ name, email, subject, mobile, message });
        await newContact.save();

        // Setup Nodemailer
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });


        const mailOptions = {
            from: email,
            to: 'admin@mondial.ae',
            subject: `New Contact Message from ${name}`,
            html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
        <p><strong>Mobile:</strong> ${mobile || 'N/A'}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({ message: 'Message received and emailed successfully!' });

    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ error: 'Server error, please try again later.' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});