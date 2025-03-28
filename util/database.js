import { MongoClient } from 'mongodb'
const url = 'mongodb+srv://lchmax37:rv5nJNfqxpZQQm5o@volforce.4k45bah.mongodb.net/?retryWrites=true&w=majority&appName=Volforce'
const options = { useNewUrlParser: true }
let connectDB

if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect()
  }
  connectDB = global._mongo
} else {
  connectDB = new MongoClient(url, options).connect()
}
export { connectDB }
