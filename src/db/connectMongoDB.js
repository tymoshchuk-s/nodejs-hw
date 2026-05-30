import mongoose from 'mongoose';

const { DB_HOST } = process.env;

const connectMongoDB = async () => {
  try {
    await mongoose.connect(DB_HOST);
    console.log('Database connected successfully');
  } catch (error) {
    console.log('Failed connect database', error);
    throw error;
  }
};

export default connectMongoDB;
