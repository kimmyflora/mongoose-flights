const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

db.on('connected', function() {
	// This function runs when we establish a connection between our express server 
	// and mongodb!
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});