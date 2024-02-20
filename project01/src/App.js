import logo from './logo.svg';
import './App.css';

function App() {
  /* 
    JSX
    JS에 XML를 추가한 확장문법
    하나의 파일에 HTML과 JS를 동시에 작성
    -> document  객체 별도 접근 X
    -> 가독성이 좋고 기능별 분류가 쉬움

    JSX 작성 규칙
    (1) 여러 요소가 있다면 부모 요소로 감싸기
    (2) return문 안에서 JS 표현식 사용 가능 : {} 사용
    (3) 표현식 안에서 if문 사용 불가 -> 삼항연산자로 대체 : ===
    (3-1) 조건이 하나일 때 : &&
    (3-2) 조건이 참, 거짓일 때 : 조건 ? T : F
    (3-3) 조건이 여러 개일 때 : return문 위에서 if문 사용

    (4) 인라인 스타일링 : 객체 형태로 작성
    (5) class는 className으로 사용
    (6)콘텐츠(내용)가 없어도 끝태그까지 작성
    (7)HTML 태그의 첫글자는 반드시 소문자로 생성
  */

  const userName = '임꺽정';
  const pageState = 'close';

  let text='';
  //(3-3) 조건이 여러 개일 때 : return문 위에서 if문 사용
  if(userName === '박수현'){
    text = '우수회원입니다.'
  } else if(userName ==='홍길동') {
    text = '일반회원입니다.'
  } else {
    text = '회원이 아닙니다.'
  }

  //index.js에 있는 React.StrictMode를 켜놓으면 코드가 두번씩 실행됨
  console.log('현재 방문한 사람 :', userName);

  const h3style = {
    backgroundColor : 'skyblue',
    color: 'blue'
  }

  return (
    <div>
      <h1 className='h1Tag'
      style={{
        backgroundColor : 'orange',
        color : 'gold'
      }}>정윤오의 리액트 페이지</h1>

      {/* <hr></hr> */}
      <hr/>

      {/* {(3-1) 조건이 하나일 때 : &&} */}
      {/* {pageState === 'open' && <h2>{userName}님 환영합니다.</h2>} */}

      {/* {(3-2) 조건이 참, 거짓일 때 : 조건 ? T : F} */}
      {userName === '박수현'
      ?<h2>{userName}님 환영합니다.</h2>
      :<h2>{userName}님 다음에 방문해주세요.</h2>}
      <h3 style={h3style}>{text}</h3>



    </div>
  
  );
}

export default App;
