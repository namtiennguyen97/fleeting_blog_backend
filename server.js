const express = require('express')
const app = express()
const axios = require('axios');
const port = 3000;

axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(function (response) {
        // handle success
        // console.log(response.data);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });










const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://root:tiennam97@mydatabase.oahzbly.mongodb.net/?retryWrites=true&w=majority&appName=mydatabase`;



// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

let data = {};

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        const db = client.db("demo_document");


        // await db.createCollection('demo')


        const collection =  db.collection('demo_table')

        //create- insert into
        const insertResult = await collection.insertMany([{ name: 'Nam nguyen', age: 9999, address: 'HN' }]);
        console.log('Inserted documents =>', insertResult);

        //get all without query
        const findResult = await collection.find({}).toArray();
        data = findResult
        console.log('Found documents =>', findResult);

        //query find by conditions
        // const filteredDocs = await collection.find({ a: 2 }).toArray();
        // console.log('Found documents filtered by name =>', filteredDocs);

        //update updateOne - updateMany
        // const updateResult = await collection.updateOne({ a: 3 }, { $set: { a: 'replace' } });
        // console.log('Updated documents =>', updateResult);

        //delete a document deleteMany deleteOne
        // const deleteResult = await collection.deleteMany({ a: 'replace' });
        // console.log('Deleted documents =>', deleteResult);

        // const indexName = await collection.createIndex({ a: 1 });
        // console.log('index name =', indexName);



        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);






app.get('/', function (req, res) {
    res.send(data)
})







app.listen(3000, () => {
    console.log(`Server running at http://localhost:${port}`);
})