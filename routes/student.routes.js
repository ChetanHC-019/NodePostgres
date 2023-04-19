const express=require('express');
const router=express.Router();
//const db=require('../config/database');
const Student=require('../models/Students')

//get student list
router.get('/',(req,res)=> 
Student.findAll()
.then(student=>{
    res.render('student',{
        student
    })
  })
.catch(err=> console.log("Error ::"+err)))

//display add gig form
 router.get('/add',(req,res)=>res.render('add'))


//add a student
router.post('/add',(req,res)=>{
    let {student_name,student_phone,student_address,student_marks}=req.body;

    //insert into table
    Student.create({
        student_name,
        student_phone,
        student_address,
        student_marks
    })
    .then(student=>res.redirect('/student'))
    .catch(err=>console.log(err))
})




module.exports=router;

