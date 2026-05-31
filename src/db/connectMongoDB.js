import mongoose from 'mongoose';

const { MONGO_URL } = process.env;

const connectMongoDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log('Database connected successfully');
  } catch (error) {
    console.log('Failed connect database', error);
    throw error;
  }
};

export default connectMongoDB;
