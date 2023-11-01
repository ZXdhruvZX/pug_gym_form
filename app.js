const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express();
const port = 80;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())  //To extract the data from the website to the app.js file



// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory


// ENDPOINTS


// POST requests are used to submit data to a server while GET queries are used to get data from a server


app.get('/', (req, res) => {
    const con = " This is the best content on the internet so far so use it wisely"  //We are sending title and content by ourself
    const params = { 'title': 'PubG is the best game', "content": con }
    res.status(200).render('index.pug', params);
})


app.post('/', (req, res) => {
    name = req.body.name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more

// Now we will make a unique file name. Then we have to write the contents of the file as follow
    let outputToWrite = `the name of the client is ${name}, ${age} years old, ${gender}, residing at ${address}. More about him/her: ${more}`
    fs.writeFileSync('output.txt', outputToWrite)
    params = { 'message': 'Your form has been submitted successfully' }
    res.status(200).render('index.pug', params);



})





app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});



