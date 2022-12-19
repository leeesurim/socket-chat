# 나만의 채팅
- 개인 프로젝트 진행

## 📝 서비스 소개
- Socket.IO를 이용한 채팅 서비스
- zoom 채팅처럼 모두에게 전송하거나 특정인에게 DM 보내는 형식
![01_chat_main](https://user-images.githubusercontent.com/108252916/208385382-9e2ac564-8dc4-4283-82ad-0aabfba9d77d.gif)

## 🛠️기술 스택

**Front-End**
- HTML, CSS, JavaSript(ES6)

**Back-End**
- Node.js, Express, Socket.IO

## 💻 담당한 부분
![02_chat_nickname](https://user-images.githubusercontent.com/108252916/208385972-beebf654-d5da-415b-a8df-46d594a3e235.gif)
- **닉네임 유효성 검사 기능 구현**
    - 닉네임: 2-10자 제한, 특수문자 제외
    - 정규 표현식을 이용하여 아래와 같은 상황에는 다시 입력할 수 있도록 prompt 띄움
        - 공백만 입력된 경우
        - 문자열에 공백이 있는 경우
        - 특수문자가 있는 경우
        - 글자수 초과할 경우

![03_chat_layout01](https://user-images.githubusercontent.com/108252916/208386333-523e8dd1-92b5-43a9-bb33-be0dc8ca2892.png)
- **레이아웃 구현**
    - 닉네임을 작성하고 입장하면 채팅창 상단에 `OOO님이 입장하셨습니다.` 라는 공지와 퇴장할 경우 `OOO님이 퇴장하셨습니다.` 공지 띄움
    - 전체를 기준으로 작성하면  `내가 모두에게`
    - 특정인을 선택하여 작성하면 `내가 OOO님에게(DM)`

![03_chat_layout02](https://user-images.githubusercontent.com/108252916/208386576-67aaf814-0958-4430-b8b7-4811aa29c2f7.png)
- **레이아웃 구현**
    - 특정인이 나에게 DM을 보낼 경우 `OOO님이 나에게(DM)`
