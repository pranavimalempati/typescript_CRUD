import { NextFunction, Request, Response} from 'express';
import {db} from '../config/db'
const college=db.collection('College')

// inserting the data into db insertone and insertmany
export const addCollege= async (req:Request,res:Response)=>{
    try {
        let resp;
        if (!(req.body && Array.isArray(req.body))) {
         resp =  await college.insertOne(req.body)
        }else{
         resp = await college.insertMany(req.body);
        }
        console.log(resp)
        res.status(200).json({
            status: "success",
            response: resp,
            message: "inserted sucessfully",
          });

    } catch (error) {
        res.status(400).json({
            status: "fail",
            response: null,
            message: error,
          });
    }
}

export const findall= async (req:Request,res:Response)=>{
    try {
        const resp =  await college.find().toArray(); 
        console.log(resp)
        res.status(200).json({
            status: "success",
            response: resp,
            message: "fetched sucessfully",
          });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            response: null,
            message: error,
          });
    }

}


export const remove = async (req:Request,res:Response)=>{
    try {
        const resp =  await college.deleteOne({collegeId:req.body.collegeId})
        console.log(resp)
        res.status(200).json({
            status: "success",
            response: resp,
            message: "deleted sucessfully",
          });


    } catch (error) {
        res.status(400).json({
            status: "fail",
            response: null,
            message: error,
          });
    }
}

export const findOne = async (req:Request,res:Response)=>{
    try {

        const resp =  await college.findOne({collegeId:req.body.collegeId});
        console.log(resp)
        res.status(200).json({
            status: "success",
            response: resp,
            message: "fetched sucessfully",
          });

    } catch (error) {
        res.status(400).json({
            status: "fail",
            response: null,
            message: error,
          });
    }
}

// {collegeId:req.body.collegeId}

export const update = async (req:Request,res:Response)=>{
    try {
        const resp =  await college.updateOne(
            {collegeId:req.body.collegeId},
         { $set: req.body }
         );
        console.log(resp)
        res.status(200).json({
            status: "success",
            response: resp,
            message: "updated sucessfully",
          });

    } catch (error) {
        res.status(400).json({
            status: "fail",
            response: null,
            message: error,
          });
    }
}


export const updateall = async (req:Request,res:Response)=>{
    try {

        const filter ={name:req.body.name}
        console.log(req.body.location)
        const updateDoc = {$set:{location:req.body.location}}
        const resp =  await college.updateMany(filter,updateDoc);
        //  {collegeId:(req.body.collegeId)},
        //  { $set: (req.body) }
        console.log(resp)
        
        res.status(200).json({
            status: "success",
            response: resp,
            message: "updated sucessfully",
          });
    
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: "fail",
            response: null,
            message: error,
          });
    }
}


export const update1= async (req:Request,res:Response)=>{
    try {

        const filter =req.body.where
        const updatecollege = await college.find(filter).toArray();
       console.log(updatecollege);
       for(const clg of updatecollege){
         await college.findOneAndUpdate( 
             {name:clg.name},
        { $set:req.body.data});
       
       }
        res.status(200).json({
            status: "success",
            response: filter,
            message: "updated sucessfully",
          });
    
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: "fail",
            response: null,
            message: error,
          });
    }
}

export const removemany = async (req:Request,res:Response)=>{
    try {
         req.body.where = req.body.where ? req.body.where : null;
        const resp =  await college.deleteMany( req.body.where)
        console.log(resp)
        res.status(200).json({
            status: "success",
            response: resp,
            message: "deleted sucessfully",
          });


    } catch (error) {
        res.status(400).json({
            status: "fail",
            response: null,
            message: error,
          });
    }
}


