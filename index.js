const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

// Define the path to your static files
const staticPath = path.join(__dirname, '../client');
// app.use(express.static(staticPath));

// Set the view engine to use Handlebars (hbs)
app.set('view engine', 'hbs');

// Template engine route
app.get('/', (req, res) => {
  res.render('index',{
    home:"MY home"
  }); // Remove the dot before 'index'
});

// Default route
app.get('/hello', (req, res) => {
  res.send('Hello from another world');
});

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
