// backend/src/app.js

const express = require('express');
const dotenv = require('dotenv');

const connectDB = require('../config/db');

// routes import
const authRoutes = require('../routes/authRoutes');

// .env 파일 로드
dotenv.config();

// 데이터베이스 연결
connectDB(); // 이제 connectDB는 진짜 함수입니다!

const app = express();

// JSON 파싱 미들웨어
app.use(express.json());

// API Routes
app.use('/api/auth', authRoutes);

module.exports = app;

