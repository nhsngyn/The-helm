The Helm당신의 삶, 직접 조종하세요. (Steer Your Life.)

🧐 프로젝트 소개 (Project Introduction)
    The Helm은 AI를 활용하여 막연한 목표나 버킷리스트를 구체적인 실행 계획으로 전환해주는 웹 애플리케이션입니다. 사용자가 '-5kg 다이어트'와 같은 목표를 설정하면, AI가 체계적인 할 일(Task) 목록을 생성해주고, 사용자는 이를 체크하며 진행률을 직관적으로 추적할 수 있습니다.이 프로젝트는 인생이라는 항해에서 당신이 직접 '키(The Helm)'를 잡고 원하는 목표를 향해 나아갈 수 있도록 돕는 똑똑한 1등 항해사가 되어줄 것입니다.


✨ 주요 기능 (Key Features)
    - 🔐 사용자 인증: JWT 기반의 안전한 회원가입 및 로그인 기능🪣 버킷리스트 관리: 나만의 버킷리스트를 자유롭게 추가, 수정, 삭제
    - 🤖 AI 실행 계획 생성: 목표를 입력하면 AI가 실행 가능한 할 일(Task) 목록을 자동으로 생성
    - ✔️ 할 일 진행률 추적: 생성된 Task를 체크박스로 관리하며 진행 상황을 실시간으로 저장
    - 📊 진행률 시각화: 각 버킷리스트별 달성률을 Progress Bar를 통해 직관적으로 확인
    - 🏷️ 카테고리 태그: '운동', '학습' 등 카테고리를 설정하여   버킷리스트를 시각적으로 분류
    - 🛠️ 기술 스택 (Tech Stack)
        Backend: Node.js, Express
        Frontend: React, Tailwind CSS
        Database: MongoDB, Mongoose
        Deployment: Render (Backend), Vercel (Frontend)
        Etc: JWT for Authentication, OpenAI API (or other)


🚀 시작하기 (Getting Started)프로젝트를 로컬 환경에서 실행하는 방법입니다.

    - Backend

    # 1. 백엔드 폴더로 이동
    cd backend

    # 2. 패키지 설치
    npm install

    # 3. .env 파일 생성 후 아래 내용 추가
    # MONGO_URI=[Your MongoDB Connection String]
    # JWT_SECRET=[Your JWT Secret Key]

    # 4. 개발 서버 실행
    npm run dev


    - Frontend

    # 1. 프론트엔드 폴더로 이동
    cd frontend

    # 2. 패키지 설치
    npm install

    # 3. .env.local 파일 생성 후 아래 내용 추가
    # VITE_API_URL=http://localhost:5000

    # 4. 개발 서버 실행
    npm start


📸 스크린샷 (Screenshots)
    <!-- 프로젝트 완성 후, 서비스의 주요 화면 스크린샷을 추가할 예정입니다. -->
    - 로그인 페이지
    - 버킷리스트 목록 페이지
    - AI 실행 계획 모달



🗓️ 앞으로의 계획 (Future Plans)
    - [ ] 전체 버킷리스트 진행률을 종합적으로 보여주는 대시보드
    - [ ] 카테고리/태그 기반 필터링 기능
    - [ ] 소셜 로그인 기능