const mongoose = require('mongoose');

const dburi= 'mongodb+srv://usermain:35253525@node.bkvj6.mongodb.net/turism?retryWrites=true&w=majority';

mongoose.connect(dburi,{ useNewUrlParser: true , useUnifiedTopology : true})
.then((result)=>console.log('conected'));
const schema = mongoose.Schema;

const commentschema = new schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    }

},{timestamps: true});

const Commentmodel = mongoose.model('comment',commentschema)
module.exports =Commentmodel;