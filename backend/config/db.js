require('dotenv').config();
const { MongoClient } = require('mongodb');
const client = new MongoClient(`mongodb://root:root123@127.0.0.1:27017`);
// const client = new MongoClient(uri);
async function find(col) {
    // Use connect method to connect to the server
    try {
      // const client = new MongoClient(process.env.MONGOURL);
      await client.connect();
      console.log('Connected successfully to server');
      const db = client.db('logs_redmine');
      const collection = db.collection(col);
      let result = collection.find({})
    //   console.log(result.toArray())
      return result.toArray()
    } catch (error) {
      console.log(error)
    }
}

module.exports={find}
// async function main(){
//     const result = await find('login_logs');
//     // result = result.toArray()
//     console.log(result) 
    
// }
// main()