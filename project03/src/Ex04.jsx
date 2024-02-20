import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Ex04 = () => {
    
    /*
    1. 유저는 던지기 버튼을 누를 수 있다
    2. 던지기 버튼을 눌렀을 때 유저의 주사위 모양이 바뀐다(랜덤)
    3. 이 때 컴퓨터의 주사위 모양 또한 랜덤으로 바뀐다
    4. 나의 주사위와 컴퓨터의 주사위를 비교한다
    5. 내가 승리하면 팝업창으로 '승리'
       내가 패배하면 팝업창으로 '패배'
    ** 변수명 통일
    내가 던진 주사위 숫자 = myDice
    컴퓨터가 던진 주사위 숫자 = comDice

    **public 방식을 이용해서 이미지 가지고 올 것

    step1. 이미지 두개 가져오기 (주사위 1 - 1)
    step2. 숫자 랜덤하게 가져오기, state 적용
    step3. 랜덤하게 가져온 숫자에 따라 이미지 다르게 가져오기
    step4. 승리 / 패배 판별
    */

    const [myDice, setMyDice] = useState(1);
    const [comDice, setComDice] = useState(1);
    const [result, setResult] = useState('게임 시작 전..');

    //반복되는 작업은 함수로 정의, 필요할 때 함수 호출로 해결
    /** 랜덤하게 숫자를 호출해주는 함수 */
    const makeRandom =()=> {
        return Math.floor(Math.random() * 6 + 1);
    }

    const handleDice = () => {
        setMyDice(makeRandom())
        //console.log(myDice)
        setComDice(makeRandom())
        //console.log(comDice)

        if (myDice === comDice) {
            //alert("무승부")
            setResult("무승부")
        } else if (myDice > comDice) {
            //alert("승리")
            setResult("승리")
        } else {
            //alert("패배")
            setResult("패배")
        }
    }

    //시점이 어긋나 보이는 현상 처리 과정
    /** 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정 */
    useEffect(()=>{
        if (myDice === comDice) {
            //alert("무승부")
            setResult("무승부")
        } else if (myDice > comDice) {
            //alert("승리")
            setResult("승리")
        } else {
            //alert("패배")
            setResult("패배")
        }
    },[myDice,comDice])

    const resetNum = () => {
        setMyDice(1)
        setComDice(1)
        setResult('게임 시작 전..')
    }

    let picSrcMy = `http://localhost:3000/style/dice/${myDice}.png`
    let picSrcCom = `http://localhost:3000/style/dice/${comDice}.png`

    return (
        <div>


            <Container style={{ width: 520, alignItems: "center", textAlign: "center" }}>
                <Row>
                    <Col>
                        <h1>주사위 게임</h1>
                    </Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col><Button variant="warning" onClick={handleDice}>던지기</Button>{' '}</Col>
                    <Col><Button variant="danger" onClick={resetNum}>리셋</Button>{' '}</Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col>-------------------------------------------</Col>
                </Row>
                <Row>
                    <Col><img src={picSrcMy} alt="" /></Col>
                    <Col><img src={picSrcCom} alt="" /></Col>
                </Row>

                <Row>
                    <Col><p>My Dice</p></Col>
                    <Col><p>Com Dice</p></Col>
                </Row>
                <Row>
                    <Col>
                        <h3>{result}</h3>
                    </Col>
                </Row>
            </Container>


        </div>
    )
}

export default Ex04