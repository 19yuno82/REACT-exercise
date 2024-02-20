import './App.css';
import { Routes,Route } from 'react-router-dom';
import Main from './components/Main';
import About from './components/About';
import MyPage from './components/MyPage';
import Product from './components/Product';
import NotFound from './components/NotFound';
import Header from './components/Header';


function App() {

  /*
  [React Router]
  -사용자의 요청에 따라 요청에 맞는 페이지를 보여주는 것

  1) react router 설치
  npm i react-router-dom

  2) router를 사용할 수 있는 환경 세팅
  - router 기능을 사용하고 싶으면, 그 사용하고 싶은 범위를
    BrowerRouter 라는 컴포넌트로 감싸주어야 한다(필수!)
  - BrowerRouter 가 하는 일 : 내가 받은 URL과 내가 보여줄 UI를 동기화 해주는 컴포넌트
  - 보통 index.js 로 이동해서 App를 BrowerRouter로 감싼다

  3) Routes - Route
  - Routes : 여러 Route(경로)들을 감싸서 그 중 조건에 맞는 라우트 하나만 렌더링 해준다
             과거에는 Switch 라는 이름으로 사용되었다
  - Route : 여러 경로

  - 사용자 요청 "나 로그인 페이지 좀 줘"
  - routes "로그인? 기다려봐.. 여기있네(로그인페이지 전달)"
  */

  return (
    <div className='App'>
      <h1>welcome to react Router</h1>
      <Header />
      <Routes>
          {/* 
          Route 필수 속성 2가지
            - path(경로) : 사용자가 이렇게 요청 했을 때
            - element(컴포넌트) : 어떤 컴포넌트를 보여줄 것인가
          */}

          <Route path='/' element={<Main/>}></Route>
          <Route path='/about' element={<About/>} />
          <Route path='/mypage' element={<MyPage/>}/>
          <Route path='/product/:num' element={<Product/>}/>
          <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
