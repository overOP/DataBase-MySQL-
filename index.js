const express = require('express');
const app = express()
const DB = require('./MySQL')

app.use(express.json())
DB.con




app.post('/user', (req, res) => {
    //destructure the body
    const { id, name, email, password } = req.body
    //insert user
    const createUserSql = `INSERT INTO users (id, name, email, password) VALUES (?, ?, ?, ?)`;
    DB.con.query(createUserSql, [id, name, email, password], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send('user created');
        }
        return res.status(201).json({
            message: 'user created',
            data: result
        });
    });
});
app.listen(3000, () => {
    console.log('server is running on port 3000');
});