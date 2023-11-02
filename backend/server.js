const { connectToDatabase } = require('./db');
const { connectToDatabase2 } = require('./register');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

// Define a route to fetch data
app.get('/products', async (req, res) => {
  try {
    const { client, database,collection } = await connectToDatabase();

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

app.post('/register', async (req, res) => {
  // Get the registration data from the request body
  const registrationData = req.body;


  // Connect to MongoDB

  const { client, database, collection } = await connectToDatabase2();

  // Insert the registration data into MongoDB
  const document = await collection.insertOne(registrationData);

  // Close the connection to MongoDB
  client.close();

  // Send a response to the user
  res.send({
    status: 'success',
    message: 'User registered successfully',
    id: document.insertedId,
  });
});
