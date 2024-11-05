# CH5 멀티 플레이 과제
----
#### 과제 기간 : 2024.10.21(월) ~ 2024.11.01(금)
----
#### 개발 환경
1. 개발 환경
   - 개발 툴 : VS-Code
   - 깃 저장소 : https://github.com/mingyu6688/ch5-tcp-multiplay-game
1. 프로그램 언어
   - Node.js
   - JavaScript
1. 프레임 워크
   - Express
1. 패키지 관리자
   - yarn

### 구현 리스트
- 멀티 플레이 과제 구현 중<br>
1. 프로젝트 생성<br>
- 프로젝트 시작
- 소켓 이벤트 확인
- 기능별 폴더, 파일 분리
2. 환경변수 및 상수, 에러 처리<br>
- 헤더 및 패킷 구조 설계
3. 프로토콜 버퍼 적용 및 패킷 파싱<br>
- 프로토콜 버퍼 적용
4. 유저 세션 및 게임 세션 관리<br>
- 유저 게임 클래스 선언
- 접속 시 생성 이벤트
- 세션 관리 로직 추가
- 접속 패킷 추가 및 파싱 테스트
- 클라이언트 접속 테스트
5. 접속 및 이동 패킷 교환<br>
- 이동 패킷 추가 및 파싱 테스트
- 멀티플레이어 이동 테스트
6. DB 연동<br>
- DB 세팅 및 (유저 정보) 데이터 모델링
- (서버) 접속 및 접속 해제 시 유저 정보 기록