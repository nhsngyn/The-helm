// ./routes/authRoutes.js
// 이 파일은 /register 라는 주소로 POST 방식의 요청이 오면, authController.js 파일에 있는 registerUser 함수를 실행하라고 알려주는 '교통 표지판' 역할을 합니다.

const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/authController');

// URL: /api/auth/register
// Method: POST
// Description: 사용자를 등록합니다.
router.post('/register', registerUser);

module.exports = router;