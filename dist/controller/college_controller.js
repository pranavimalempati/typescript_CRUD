"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findall = exports.addCollege = void 0;
const db_1 = require("../config/db");
const college = db_1.db.collection('College');
const addCollege = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const college = req.body;
        console.log(college);
        const resp = yield college.create(req.body);
        console.log(resp);
        res.send(resp);
    }
    catch (error) {
        res.send("Error " + error);
    }
});
exports.addCollege = addCollege;
const findall = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resp = yield college.find();
        console.log(resp);
        res.send(resp);
    }
    catch (error) {
        res.send("Error " + error);
    }
});
exports.findall = findall;
// export const findById= async (req:Request,res:Response)=>{
//     try {
//         const resp =  await College.find(); 
//         console.log(resp)
//         res.send(resp)
//     } catch (error) {
//         res.send("Error " +error)
//     }
// }
