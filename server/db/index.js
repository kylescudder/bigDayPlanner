
const mongoose = require('mongoose')
mongoose
    .connect(process.env.MONGODB_CONNECTION_STRING, 
	{ 
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true
 	})
	.then(console.log())
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db