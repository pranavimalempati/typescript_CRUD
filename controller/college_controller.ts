import { Request, Response} from 'express';
import {db} from '../config/db'
const college=db.collection('College')


export const addCollege= async (req:Request,res:Response)=>{
    try {
        let resp;
        if (!(req.body && Array.isArray(req.body))) {
         resp =  await college.insertOne(req.body)
        }else{
         resp = await college.insertMany(req.body);
        }
        console.log(resp)
        res.send(resp)

    } catch (error) {
        res.send("Error " +error)
    }
}

export const findall= async (req:Request,res:Response)=>{
    try {
        const resp =  await college.find().toArray(); 
        console.log(resp)
        res.send(resp)

    } catch (error) {
        res.send("Error " +error)
    }

}


export const remove = async (req:Request,res:Response)=>{
    try {
        const resp =  await college.deleteOne({collegeId:req.body.collegeId})
        console.log(resp)
        res.send(resp)

    } catch (error) {
        res.send("Error " +error)
    }
}

export const findOne = async (req:Request,res:Response)=>{
    try {

        const resp =  await college.findOne({collegeId:req.body.collegeId});
        console.log(resp)
        res.send(resp)

    } catch (error) {
        res.send("Error " +error)
    }
}



export const update = async (req:Request,res:Response)=>{
    try {
        const resp =  await college.updateOne(
            {collegeId:req.body.collegeId},
         { $set: req.body }
         );
        console.log(resp)
        res.send(resp)

    } catch (error) {
        res.send("Error " +error)
    }
}


