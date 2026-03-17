// **Sample code for reference. Replace with your own implementation.**

// DB connection config 

// export const connectDB = async (): Promise<void> => {
//     const uri = process.env.MONGO_URI;
//
//     if (!uri) {
//         throw new Error('MONGO_URI environment variable is not set');
//     }
//
//     await mongoose.connect(uri);
//     console.log('MongoDB connected:', mongoose.connection.host);
// };
//
// // USAGE in server.ts:
// // import { connectDB } from './config/db';
// // connectDB().then(() => app.listen(PORT));
// ---
