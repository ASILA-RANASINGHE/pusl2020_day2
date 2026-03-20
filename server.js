console.log("hi im working now")
const port = 3000
const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }));



app.get('/', (req, res) => {
    res.send(`
        <form action="/submit" method="POST">
            <h2>Welcome</h2>
            <p>Please enter your name:</p>
            <input type="text" name="userName" required>
            <button type="submit">Submit</button>
        </form>
    `);
});


app.post('/submit', (req, res) => {
    userName = req.body.userName; 
    res.redirect('/greeting'); 
});


app.get('/greeting', (req, res) => {
    res.send(`
        <h1>Hello, ${userName}!</h1>
        <br>
        <a href="/">Go Back</a>
    `);
});

//my way
app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})
