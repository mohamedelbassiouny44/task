const express = require('express');
const mongoose = require('mongoose');


let app = express();

mongoose.connect("mongodb://0.0.0.0:27017/base") 
.then(
    () => console.log("db is connected"),
    err=> {console.log(err);}
);



const student = new mongoose.Schema({
    name : String,
    phone : String,
    age : Number,
    course : String    
});
let StudentModel= new mongoose.model("student", student);



const course = new mongoose.Schema({
    name : String,
    code : String,
    price : Number,
    startingdate : Date    
});
let courseModel= new mongoose.model("course", course);


let corse1 = new courseModel({
    name : "backend",
    code : "124",
    price : 5500,
    startingdate : "1/1/2024"
}).save();

let corse2 = new courseModel({
    name : "frontend",
    code : "125",
    price : 5000,
    startingdate : "1/1/2024"
}).save();

let corse3 = new courseModel({
    name : "cyber security",
    code : "126",
    price : 10000,
    startingdate : "1/1/2024"
}).save();

let st1 = new StudentModel({
    name : "mohamed elbassiouny",
    phone : "012121212",
    age : 21,
    course : "backend"
}).save();

let st2 = new StudentModel({
    name : "mohamed ali",
    phone : "0128888",
    age : 21,
    course : "front end"
}).save();

let st3 = new StudentModel({
    name : "momen ashraf",
    phone : "01288888",
    age : 21,
    course : "cyber security"
}).save();


app.listen(3000, function(){
    console.log('server now is open')
})
