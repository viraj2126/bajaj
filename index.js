const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Use body-parser middleware to parse JSON requests
app.use(bodyParser.json());

// Define the POST method endpoint
app.post('/bfhl', (req, res) => {
  try {
    // Get the request data
    const klc = req.body;
    

    // Check if the request body is an array
   

    // Initialize the response data
    const response_data = {
      status: 'success',
      user_id: 'viraj_garg_26112002',
      college_email_id: 'vg5519@srmist.edu.in',
      college_roll_number: 'RA2011003011387',
      array_of_numbers: [],
      array_of_alphabets: [],
      highest_alphabet: [],
    };

    
    klc.data.forEach((item) => {
      if (typeof item === 'number') {
        response_data.array_of_numbers.push(item);
      } else if (typeof item === 'string') {
        response_data.array_of_alphabets.push(item.toUpperCase());
      }
    });

    // Calculate the highest alphabet in the input array of alphabets
    const highest_alphabet = response_data.array_of_alphabets.reduce((a, b) =>
      a > b ? a : b
    );

    // Add the highest alphabet to the response data
    response_data.highest_alphabet.push(highest_alphabet);

    // Return the response data
    res.json(response_data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Define the GET method endpoint
app.get('/bfhl', (req, res) => {
  // Construct the response data
  const response_data = {
    operation_code: 1,
  };
  // Return the response data
  res.json(response_data);
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
