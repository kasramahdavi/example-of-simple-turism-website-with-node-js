const mongoose = require('mongoose');

const dburi= 'mongodb+srv://usermain:35253525@node.bkvj6.mongodb.net/turism?retryWrites=true&w=majority';

mongoose.connect(dburi,{ useNewUrlParser: true , useUnifiedTopology : true})
.then((result)=>console.log('conected'));
const schema = mongoose.Schema;

const imageschema = new schema({
    imagename:String
},{timestamps: true})


const imagemodel = mongoose.model('image', imageschema);

module.exports = imagemodel;