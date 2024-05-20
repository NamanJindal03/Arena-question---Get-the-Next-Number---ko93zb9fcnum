const express = require('express');
const app = express();

//Middlewares
app.use(express.json());

app.get('/api/get-next-num', (req, res) => {
    const number = req.body.num;
    if(isNaN(number)){
        return res.json({message:"error" , status: 'failure'})
    }
    const newNumber = parseInt(number) + 1;
    return res.json({message: newNumber, status: 'success'})
})

// Write a GET Request to get the next number from the input 'num'.
// Endpoint : /api/get-next-num
// Return the response as {message : , status: }

module.exports = app;
