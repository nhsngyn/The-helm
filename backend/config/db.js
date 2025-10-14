// backend/config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // .env 파일에 저장된 MONGO_URI를 사용해 MongoDB에 연결을 시도합니다.
    const conn = await mongoose.connect(process.env.MONGO_URI);

    // 연결에 성공하면, 어떤 호스트에 연결되었는지 콘솔에 출력합니다.
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    // 연결에 실패하면, 에러 메시지를 출력하고 프로세스를 종료합니다.
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;