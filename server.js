
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));


app.get('/login', (req, res)=>{
    res.sendFile(path.join(__dirname, 'login.html'));
});
app.get('/reviews', (req, res)=>{
    res.sendFile(path.join(__dirname, 'reviews.html'));
});
app.get('/index', (req, res)=>{
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/contact', (req, res)=>{
    res.sendFile(path.join(__dirname, 'contact.html'));
});
app.get('/workouts', (req, res)=>{
    res.sendFile(path.join(__dirname, 'workouts.html'));
});
app.get('/register', (req, res)=>{
    res.sendFile(path.join(__dirname, 'reg.html'));
});
app.get('/L11index', (req, res)=>{
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.post('/register', (req, res) => {
    const user = req.body;

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

        users.push(user);

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


app.listen(PORT, () => {
    console.log(`Serverul rulează la http://localhost:${PORT}`);
});