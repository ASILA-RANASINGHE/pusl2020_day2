const express = require('express');
const app = express();


app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  
    res.send(`
        <form action="/submit" method="POST">
            <h2>Welcome</h2>
            <p>Please enter your name to receive a greeting.</p>
            <input type="text" name="userName" required>
            <button type="submit">Get Greeting</button>
        </form>
    `);
});


app.post('/submit', (req, res) => {
    
    const submittedName = req.body.userName; 
    res.redirect(`/greeting?name=${submittedName}`);
});


app.get('/greeting', (req, res) => {
    const nameToDisplay = req.query.name;
    res.send(`
        <h1>Hello, ${nameToDisplay}!</h1>
        <br>
        <a href="/">Go Back</a>
    `);
});


app.listen(3001, () => {
    console.log;
});