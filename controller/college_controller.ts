import { Request, Response} from 'express';
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

// finding the data in db find many by giving condition
export const findmany= async (req:Request,res:Response)=>{
    try {
        let resp;
        // checking pagination
        if ((req.body.skip || req.body.skip === 0) && req.body.take) {
            resp = await college
              .find({$or:[
                { location: { $regex: '.*' + req.body.location + '.*' } },
                { name: { $regex: '.*' + req.body.name + '.*' }}]})
              .limit(req.body.take)
              .skip(req.body.skip)
              .toArray();
          }
          else {
            resp = await college.find({$or:[
                { location: { $regex: '.*' + req.body.location + '.*' } },
                { name: { $regex: '.*' + req.body.name + '.*' }}]}).toArray();
          }
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

// finding all the data in db
export const findall= async (req:Request,res:Response)=>{
    try {
        let result;
        //checking pagination
        if ((req.body.skip || req.body.skip === 0) && req.body.take) {
            result = await college
              .find()
              .limit(req.body.take)
              .skip(req.body.skip)
              .toArray();
          }
          else {
            result = await college.find().toArray();
          }
        console.log(result)
        res.status(200).json({
            status: "success",
            response: result,
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

// deleting the one record in db 
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

// finding one record in db
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

// updating one record from db
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

// updating many record in db
export const updateall = async (req:Request,res:Response)=>{
    try {

        const filter ={name:req.body.name}
        const updateDoc = {$set:{location:req.body.location}}
        const resp =  await college.updateMany(filter,updateDoc);
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

// finding and updating the record in db
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

// deleting many records in db
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

// pagination
export const pagination = async (req:Request,res:Response)=>{
    try {
        const{pagelimit,skipval} = req.body
        const posts = await college.find(req.body.where).limit(pagelimit).skip(skipval).toArray();
        console.log(posts)
        res.status(200).send(posts)
    } catch (error) {
        console.log(error);
        res.status(400).send(error)

    }
}

// finding the data based on substring  
export const substr = async (req:Request,res:Response)=>{
    try {

        const resp = await college.find({$or:[
            { location: { $regex: '.*' + req.body.location + '.*' } },
            { name: { $regex: '.*' + req.body.name + '.*' } }
        ]}).toArray();
        console.log(resp)
        res.status(200).send(resp)
    } catch (error) {
        console.log(error);
        res.status(400).send(error)

    }
}