/* eslint-disable */

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  //ES6 desturcturing 문법
  let [글제목,글제목변경] = useState('남자 코트 추천');
  let [글제목2,글제목변경2] = useState(['남자 코트 추천','여자 코트 추천','바지 추천']);
  // 이렇게 state로 해야 html이 재렌더링이 된다

  let [따봉, 따봉변경] = useState(0);

  let posts = '강남 고기 맛집';
  function 함수(){
    return 100;
  }

  function 제목바꾸기(){
    글제목변경2(['곱창 맛집','아구찜 맛집','강남 우동 맛집']);
  }

  return (
    <div className='App'>
      <div className='black-nav'>
        <div>개발 Blog</div>
      </div>
      <button onClick={ 제목바꾸기 }>버튼</button>
      <img src={logo}/>
      <h4 style={{color:'blue', fontStyle:'italic'}}> {posts}</h4>
      <h4> {함수()}</h4>
      <div className='list'>
        <h3> { 글제목 } </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3> { 글제목2[0] } <span onClick={ 함수() }>♥</span> 0 </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3> { 글제목2[1] } <span onClick={ ()=>{ 따봉변경(따봉+1) } }>♥</span> {따봉}  </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3> { 글제목2[2] } <span onClick={ ()=>{ 따봉변경(따봉+1) } }>♥</span> 0  </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
