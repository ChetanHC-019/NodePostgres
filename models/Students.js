const Sequelize =require('sequelize')
const db=require('../config/database')

const STUDENT=db.define('student_details',{
    student_name :{
        type:Sequelize.STRING
    },
    student_phone :{
        type:Sequelize.NUMBER
    },
    student_address :{
        type:Sequelize.STRING
    },
    student_marks :{
        type:Sequelize.INTEGER
    },
})

module.exports= STUDENT