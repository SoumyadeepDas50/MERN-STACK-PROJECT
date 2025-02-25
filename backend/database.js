const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/new_mern')

mongoose.connection.on('connected',()=>{
    console.log('connected to MongoDB')
})

mongoose.connection.on('error',(err)=>{
    console.error('Connection Error:',err);
})

module.exports=mongoose