import mongoose from "mongoose";


interface ConnectionOptions {
    mongoUrl: string;
    dbName: string;
}

export class MongoDatabase {
    static async connect(options: ConnectionOptions) {
        const { mongoUrl, dbName } = options;

        try{

            await mongoose.connect(mongoUrl,{
                dbName: dbName,
            });
            
            //console.log('Connected to MongoDB');
            return true;

        }catch(error){
            //console.log('Error connecting to MongoDB');
            throw error;
        }
    }
}