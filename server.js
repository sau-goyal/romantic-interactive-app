const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const RomanticConfig = require('./app/configModel');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://animelover8055:<animelover830244>@cluster0.u2tttjr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', 
//     {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }
)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

app.use(express.json());

app.post('/update-config', async (req, res) => {
    const { config } = req.body;

    try {
        // Save to MongoDB
        await RomanticConfig.deleteMany({}); // Clear existing configs
        const newConfig = new RomanticConfig(config);
        await newConfig.save();

        res.json({ message: 'Config updated and saved successfully' });
    } catch (err) {
        console.error('Error saving config to MongoDB:', err);
        res.status(500).json({ error: 'Failed to save config' });
    }
 });

const port = 4000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
 });