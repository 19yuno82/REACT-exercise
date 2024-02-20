import React, { Component } from 'react'
/* 
    - class component 단축키 : rcc
    - 
*/
export default class Ex13 extends Component {

    componentDidMount(){
        /*
        - UI 세팅이 마무리되었을 때, 그 직후 실행
        - 여기에서부터는 DOM 요소에 접근
        - 무거운 데이터를 가져오는 API CALL 여기서 사용
        =>왜? 가벼운 화면 렌더링이 끝나고 API CALL 을 해야
              사용자의 불쾌함을 줄어들기 때문이다
        */
        console.log('3. componentDidMount');
    }

    componentDidUpdate(){
        console.log('data update');
    }

    constructor(props){
        console.log('1. constructor');
        /* 생성자 함수 : 가장 먼저 실행되는 공간 
         - state값, 변수값 초기화하는 공간
         - super(props)와 함께 사용하는 것을 권고하고 있음
           밑에서 this 문법 사용 시, 생성자 내에서 정의되지 않아 버그 발생
        */
       super(props);

       this.state = {
        counter : 0
       };
       this.handleIncrement=this.handleIncrement.bind(this);
       this.handleDecrement=this.handleDecrement.bind(this);
    }
    handleIncrement(){
        console.log("handleIncrement func");
        this.setState({
            counter : this.state.counter += 1
        });
    }
    handleDecrement(){
        console.log("handleDecremen func");
        this.setState({
            counter : this.state.counter -= 1
        })
    }

  render() {
    console.log('2. render');
    return (
      <div>
        <h1>class counter : {this.state.counter}</h1>
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
      </div>
    )
  }
}
