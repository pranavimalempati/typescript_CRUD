import express from 'express'
import * as bodyParser from 'body-parser'
import {router} from './router/college_router'

const app = express();
app.set("port",3000);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/',router)

app.listen(app.get("port"),()=>{
    console.log("App is running on localhost ", app.get("port"))
})
