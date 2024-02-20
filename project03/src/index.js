import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
//1. state 개념
// import App from './Ex01';
//2. state를 활용한 좋아요 기능 만들기
// import App from './Ex02';
//3. state를 활용하여 랜덤게임 만들기
// import App from './Ex03';
//4. [실습] 주사위 게임을 만들어보자
//import App from './Ex04';
//=========🔺state ======================
//=========🔻배열함수를 이용해 렌더링 ====
//5. map 함수 연습
// import App from './Ex05';
//6. map함수를 활용해 연예인 카드를 만들기
// import App from './Ex06'
//========================================
//7. useRef 라는 리액트 훅
// import App from './Ex07'
//8. useRef pdf 변경
// import App from './Ex08'
//========================================
//9. 리액트에서 양방향으로 데이터 주고 받기
// import App from './Ex09'
//10. context 개념을 배워 컬러 실습을 해보자
// import App from './Ex10'
//11. context dark 모드 실습
//import App from './Ex11'
//ToDo list 만들기
//import App from './Ex12'
//========================================
//13. classComponent
//import App from './Ex13'
//14. useEffect 개요 및 사용
//import App from './Ex14'
//15. 미니게임 참참참 (useEffect를 스스로 활용해보자)
//import App from './Ex15'
//16. useEffect 활용해서 open API 데이터 가져와보기
//import App from './Ex16'
//17. 날씨 API를 통해 useEffect 실습을 해보자
// import App from './Ex17'
//18. 카카오맵 기본
// import App from './Ex18'
//19. 카카오맵 실습
import App from './Ex19'

//flask에서 data 받기
//import App from './Test_flask'

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
