import {MongoClient} from "mongodb";
const con=   'mongodb://localhost:27017/'
const client =new MongoClient(con)
console.log("connected to database")
const db =client.db('mongo')

export{db }
