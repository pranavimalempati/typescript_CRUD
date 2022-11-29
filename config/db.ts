import {MongoClient,ObjectId} from "mongodb";
const con=   'mongodb+srv://pranavi:root@cluster0.vcupfl6.mongodb.net/?retryWrites=true&w=majority'
const client =new MongoClient(con)
console.log("connected to database")
const db =client.db('mongo')

export{db }
