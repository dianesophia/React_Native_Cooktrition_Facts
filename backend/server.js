import express from 'express';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors({
    origin: 'http://localhost:8081'
  }));
  

app.get('/recipes/:query', async (req, res) => {
    try {
        const response = await axios.get(
            `https://api.edamam.com/search?q=${req.params.query}&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`
        );
        
        console.log(response.data.hits);
        res.json(response.data.hits);
    } catch (error) {
        console.error('Error fetching recipes:', error);
        res.status(500).json({ error: 'Failed to fetch recipes' });
    }
});


// Modify the API endpoint to accept multiple ingredients
app.get('/recipes', async (req, res) => {
    try {
        const { ingredients } = req.query;
        const response = await axios.get(
            `https://api.edamam.com/search?q=${ingredients}&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`
        );
        
        console.log(response.data.hits);
        res.json(response.data.hits);
    } catch (error) {
        console.error('Error fetching recipes:', error);
        res.status(500).json({ error: 'Failed to fetch recipes' });
    }
});


app.listen(PORT, () => {
    console.log(`Server is listening to port ${PORT}`);
});
{/*
import express from 'express';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: 'http://localhost:8081'
}));

app.use(express.json());

app.post('/recommend', async (req, res) => {
    try {
        const { risk_category, dietary_preference } = req.body;

        // Send a POST request to Flask backend to get recipe recommendations
        const response = await axios.post('http://localhost:5000/predict', {
            risk_category,
            dietary_preference
        });

        const recommendations = response.data.recommendations;

        // Send the recommendations to the client
        res.json(recommendations);
    } catch (error) {
        console.error('Error getting recommendations:', error);
        res.status(500).json({ error: 'Failed to get recommendations' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is listening to port ${PORT}`);
});
*/}