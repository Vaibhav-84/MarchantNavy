const express=require('express');
const path = require('path');
const port =80;
const app=express();

app.use(express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'static/', 'index.html'));
// res.sendFile(path.join(__dirname, '/index.html'));
})
app.get('/contact', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'static/', 'contact.html'));
})
app.get('/about', (req, res) => {
res.sendFile(path.resolve(__dirname, 'static/','about.html'));
})

app.listen(port,()=>{
console.log(`App running on ${port}`);
})