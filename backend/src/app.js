const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('../config/db'); // DB 연결 함수 import

// routes import
const authRoutes = require('../routes/authRoutes');

// .env 파일 로드
dotenv.config();

// 데이터베이스 연결
connectDB();

const app = express();

// JSON 파싱 미들웨어
app.use(express.json());

// API Routes
app.use('/api/auth', authRoutes);

module.exports = app; // 설정이 완료된 app 객체를 내보냅니다.
