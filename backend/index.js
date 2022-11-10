// import{loginRoutes} from "../backend/routes/loginRoutes"
// const loginRoutes = require("../backend/routes/loginRoutes")

const express = require("express");
const cors = require('cors');

const db = require("./config/db")

const app = express();
app.use(cors());
app.use(express.json());
// app.use(loginRoutes);


app.get('/login', (req, res)=>{
    db.find('login_logs').then((login_logs)=>{
        res.send(login_logs);
    })
} )


app.use('/', (req, res)=>{
    res.status(404);
    res.send('Tidak ditemukan cuy');

});

app.listen(5000, ()=> console.log('server up and running...'));
