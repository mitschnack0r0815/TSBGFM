const express = require('express');
const session = require('express-session');
const app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.json());      // parse JSON bodies
app.use(session({             // session for auth
    secret: 'your-secret-key', resave: false, saveUninitialized: false
}));

app.post('/api/register', (req, res) => { /* handle registration */ });
app.post('/api/login', (req, res) => { /* handle login (set session) */ });
app.post('/api/move', (req, res) => { /* handle a game move (requires login) */ });
app.get('/api/game/:id', (req, res) => { /* return game state JSON for game :id */ });

// Catch-all to serve index.html for any other request (if using client-side routing)
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Start the server
app.listen(8080, () => console.log('Server running on port 8080'));
