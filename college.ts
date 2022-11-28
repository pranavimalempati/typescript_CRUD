import * as mongoose from 'mongoose'
const uri: string = 'mongodb://localhost:27017/mongo';
mongoose.connect(uri, (err) => {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("connected to db");
    }
});
export const CollegeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true }
});
const College = mongoose.model('College', CollegeSchema);
export default College;
