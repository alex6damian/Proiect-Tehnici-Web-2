const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware pentru a analiza cererile cu corpul de tip application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Ruta pentru servirea paginii index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Ruta pentru a primi datele de la formular (POST request)
app.post('/submit', (req, res) => {
  const nume = req.body.nume;
  const email = req.body.email;

  // Afișează datele primite în consolă
  console.log(`Nume: ${nume}, Email: ${email}`);

  // Trimite un răspuns către client
  res.send('Date primite cu succes!');
});

// Pornirea serverului
app.listen(port, () => {
  console.log(`Serverul ascultă la adresa http://localhost:${port}`);
});