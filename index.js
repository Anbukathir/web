const mongoose = require('mongoose');
const app =require('./app');

mongoose.connect('mongodb://localhost/my_office',(err)=>{
    if(err) throw err;
    console.log('mongodb connected');
});



