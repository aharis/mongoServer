import mongoose from 'mongoose';
//dole navedene variable ne upisuju u bazu preko postman-a.
//postman upise samo defaultne variable 
 const StudentSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	yearOfBirth: Number,
	address: String,
})

export default mongoose.model('Student', StudentSchema);
