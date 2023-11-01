const { connectToDatabase } = require('./db');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

// Define a route to fetch data
app.get('/products', async (req, res) => {
  try {
    const { client, collection } = await connectToDatabase();

    // Get all documents from the collection
    const documents = await collection.find({}).toArray();

    // Close the connection to the database
    client.close();

    // Return the documents as a JSON response
    res.json(documents);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
