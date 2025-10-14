const User = require('../models/User');
const jwt = require('jsonwebtoken');

//JWT를 생성하는 헬퍼 함수
const generateToken = (id) => {
// process.env.JWT_SECRET은 .env 파일에 저장된 비밀키 입니다.
// 이 키를 사용해서 토큰에 서명을 하기 때문에, 이 키를 모르면 토큰을 위조할 수 없습니다.
return jwt.sign({id}, process.env.JWT_SECRET, {
    expiresIn: '30d', //토큰 유효기간: 30일 
});
};

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
const registerUser = async (req, res) => {
// 1. 요청 body에서 이메일과 비밀번호를 가져옵니다.
const {email, password} = req.body;

try {
    // 2. 이메일이 이미 DB에 존재하는지 확인합니다.
    const userExists = await User.findOne({email});

    if (userExists) {
// 400 Bad Request: 클라이언트가 잘못된 요청을 보냈다는 의미
return res.status(400).json({message: '이미 존재하는 이메일입니다.'});
    }
    // 3. User 모델을 사용해 새로운 사용자를 생성합니다.
    // (비밀번호는 User 모델의 pre('save') 미들웨어에서 자동으로 암호화됩니다.)
    const user = await User.create({
        email,
        password,
    });

    //4.  사용자가 성공적으로 생성되었다면,
    if(user) {
        // 201 Created: 요청이 성공적으로 처리되어 새로운 리소스가 생성되었다는 의미
        res.status(201).json({
            _id: user._id,
            email: user.email,
            token: generateToken(user._id), // JWT 생성 및 응답
        });
    } else {
        res.status(400).json({ message: '사용자 정보를 등록하는데 실패했습니다.'});
    }
} catch (error) {
    //500 Internal Server Error: 서버 내부에서 에러가 발생했다는 의미
     res.status(500).json({message: error.message});
}
};

module.exports = {registerUser};

