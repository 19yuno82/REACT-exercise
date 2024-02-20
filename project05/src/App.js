import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Header from './components/Header'
import Footer from './components/Footer'
import { useState } from 'react';

/*
(1) 경로 처리
- install + import
- BrowserRouter, Routes, Route, ... etc

(2) 컴포넌트 생성
- 고정 컴포넌트 : Header, Footer
- 페이지별 컴포넌트 : Main, ProductList, ProductDetail
- 하위 컴포넌트 : ProductList 내 ProductItem

(3) 컴포넌트 경로 설정
- Main => '/'
- ProductList => '/list'
- ProductDetail => '/detail'
*/

function App() {

  const [list,setList] = useState([]);
  return (
    <div className='container'>
      <h1>메인</h1>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/list' element={<ProductList list={list} setList={setList} />}/>
        <Route path='/detail/:num' element={<ProductDetail list={list}/>}/>
      </Routes>
      <Footer />
     
    </div>
  );
}

export default App;
