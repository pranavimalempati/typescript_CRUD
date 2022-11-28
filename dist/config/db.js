"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const mongodb_1 = require("mongodb");
const con = 'mongodb://localhost:27017';
const client = new mongodb_1.MongoClient(con);
const db = client.db('mongo');
exports.db = db;
