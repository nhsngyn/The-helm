// backend/server.js

// 1. 가장 먼저 .env 파일을 읽어서 환경 변수를 설정합니다.
require('dotenv').config();

// 2. ./src/app.js 에서 모든 설정이 완료된 Express 앱을 가져옵니다.
const app = require('./src/app');

// 3. 포트 번호를 .env 파일에서 가져오거나, 없다면 5000번을 사용합니다.
const PORT = process.env.PORT || 5000;

// 4. 서버를 실행하고, 성공하면 콘솔에 메시지를 출력합니다.
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
