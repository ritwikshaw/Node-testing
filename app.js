const express = require('express')
const mongoose = require('mongoose')

const app = express()
const url = `mongodb+srv://Ritwik:zatura990mongodb@test3.j49zq.mongodb.net/test3db?retryWrites=true&w=majority`;
const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })
app.use(express.json())  
const api = require('./routers/api')
app.use('/api',api)    



app.listen(9000, () => {
    console.log('server started')
})    