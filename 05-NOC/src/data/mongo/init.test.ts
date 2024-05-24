import mongoose from "mongoose";
import { MongoDatabase } from "./init";


describe('init MongoDB', () =>{

    afterAll(() => {
        mongoose.connection.close();
    });

    test('should connect to MongoDB', async () => {
        
        console.log(process.env.MONGO_DB_NAME);
        const connected = await MongoDatabase.connect({
            dbName: process.env.MONGO_DB_NAME!,
            mongoUrl: process.env.MONGO_URL!,
        });

        expect(connected).toBe(true);
    });

    test('should throw error',async ()=> {

        try {
            const connected = await MongoDatabase.connect({
                dbName: process.env.MONGO_DB_NAME!,
                mongoUrl: 'mongodb://marcos:123456@localhoasdsast:27018',
            });
            expect(true).toBe(false);
            
        } catch (error) {
            
        }



    })

});