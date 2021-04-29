import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import mongoose from 'mongoose';
import config from './config';
import app from './app';

//ako port nije drfinisan u ovom file, onda kaze da imam nedefinisan port

 const port = 5000;

mongoose.connect(config.mongo, 
        {
		useUnifiedTopology: true,
		useNewUrlParser: true,
	})
	.then(() => console.log('Database connected!'))
	.catch(() => console.log('Error connection to DB'));

app.listen(config.port, error => {
	if (error) return console.log(error);
	console.log(`Server listening on port ${port}`);
});
