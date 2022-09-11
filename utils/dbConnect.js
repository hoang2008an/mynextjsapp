import mongoose from "mongoose";
let connection ={};
async function dbConnect(){
    if(connection.isConnected){
        return;
    }
    await mongoose.connect(process.env.MONGODB_URI);
    connection.isConnected = mongoose.connections[0].readyState;
    console.log(mongoose.connections[0].readyState);
}
dbConnect().then(()=>console.log("connected"));
export default dbConnect;