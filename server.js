const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Route pentru înregistrare
app.post('/register', (req, res) => {
    const user = req.body;

    // Citește fișierul users.json
    fs.readFile('L11users.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Eroare la citirea fișierului:', err);
            res.status(500).send('Eroare server.');
            return;
        }

        let users = [];
        if (data) {
            users = JSON.parse(data);
        }

        // Adaugă noul utilizator
        users.push(user);

        // Scrie înapoi în fișier
        fs.writeFile('L11users.json', JSON.stringify(users, null, 2), (err) => {
            if (err) {
                console.error('Eroare la scrierea fișierului:', err);
                res.status(500).send('Eroare server.');
                return;
            }

            res.status(200).send({ message: 'Utilizator creat cu succes.' });
        });
    });
});

// Pornire server
app.listen(PORT, () => {
    console.log(`Serverul rulează la http://localhost:${PORT}`);
});