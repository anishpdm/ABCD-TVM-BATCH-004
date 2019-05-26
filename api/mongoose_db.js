var mongoose=require('mongoose');
mongoose.Promise=global.Promise;

mongoose.connect('mongodb://localhost:27017/IctUsers',{useNewUrlParser:true}).
then(res => console.log("Connected to DB"))
.catch(err => console.log(err));


module.exports={
    mongoose:mongoose
}