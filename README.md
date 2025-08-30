# 🖼️ ArtRoad-BackEnd

**ArtRoad-BackEnd**는 전시회 탐색 서비스 **ArtRoad**의 백엔드 프로젝트입니다.  
사용자에게 전시 정보를 제공하기 위해 외부 정보를 수집하고, 이를 데이터베이스에 저장하고 제공하는 역할을 합니다.

---

## 📄 프로젝트 설명

- 외부 문화·전시 API에서 전시 정보를 수집하고 가공하여 MySQL에 저장합니다.
- 전시 정보를 RESTful API 형태로 프론트엔드에 제공합니다.
- 프론트엔드에서 지도를 기반으로 전시 데이터를 시각화할 수 있도록 위치 정보(위도/경도)도 포함합니다.

---

## 🔧 사용 기술 스택

| 분류       | 기술                   |
|------------|------------------------|
| 언어       | TypeScript             |
| 런타임     | Node.js                |
| 프레임워크 | Express.js             |
| 데이터베이스 | MySQL (MariaDB 호환 가능) |
| 크롤링     | axios       |
| 기타       | dotenv, ts-node, cors  |

---

## 📌 주요 기능

- ✅ **전시회 목록 조회 API (`GET /exhibitions`)**
- ✅ **MySQL 연동 및 전시 데이터 저장**

---

⚙️ 설치 및 실행

1. 사전 요구사항
```
Node.js (v14 이상)

MySQL (또는 MariaDB)

yarn 또는 npm
```

2. 저장소 클론
```
git clone https://github.com/TKSK2884/ArtRoad-Backend.git
cd ArtRoad-Backend
```

3. 의존성 설치
```
yarn install
# 또는
npm install
```

4. 환경 변수 설정
```
.env 파일을 프로젝트 루트에 생성하고 아래와 같이 작성합니다:

env
DB_SERVER_ADDR=localhost
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB=your_artroad_db
```

5. 서버 실행
```
bash
코드 복사
yarn start
# 또는
npm run start
```

6. API 접속
```
API 서버는 기본적으로 http://localhost:8567 에서 실행됩니다.
```
