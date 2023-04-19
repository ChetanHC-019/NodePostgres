
const Sequelize=require('sequelize');
module.exports=new Sequelize('student','postgres','Gaj@7438',{
    host:'localhost',
    dialect:'postgres',

    pool:{
        max:100,
        min:0,
        acquire:30000,
        idle:10000
    },
});
