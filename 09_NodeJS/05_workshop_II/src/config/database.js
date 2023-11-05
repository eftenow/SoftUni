import mongoose from 'mongoose';

const connectionString = "mongodb://127.0.0.1:27017/cubes";

export const initializeDatabase = () => mongoose.connect(connectionString);
