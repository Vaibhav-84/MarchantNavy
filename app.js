const express=require('express');
const path = require('path');
const port =80;
const app=express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Navy', {useNewUrlParser: true});

const contactSchema = new mongoose.Schema({
    email: String,
    number: String,
    address1: String,
    address2: String,
    city: String,
    state: String,
    zipno: String
  });
const Apply = mongoose.model('Apply', contactSchema);
app.use(express.urlencoded())

app.use(express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {   
res.sendFile(path.join(__dirname, '/index.html'));
})
app.get('/contact', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'static/', 'contact.html'));
})
app.post('/contact.html', (req, res)=>{
    let myData = new Apply(req.body);
    myData.save().then(()=>{
        res.send("this data have been save to db ")
    }).catch(()=>{
        res.status(404).send("not send ")
    })
    // res.status(200).redirect('/contact');
})

app.get('/about', (req, res) => {
res.sendFile(path.resolve(__dirname, 'static/','about.html'));
})

app.listen(port,()=>{
console.log(`App running on ${port}`);
})