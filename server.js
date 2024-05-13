require('./config')
const express=require('express')
const mongoose=require('mongoose')
const routes=require('./routes')
const MONGO_DATABASE=process.env.MONGO_DATABASE
const PORT=process.env.PORT

mongoose.connect(MONGO_DATABASE)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
const app=express()
app.use(express.json())
app.use('/Api',routes)

app.listen(PORT,()=>{
    console.log('Server Running....')
})