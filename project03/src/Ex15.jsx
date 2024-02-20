import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Ex15 = () => {

    let pos = ['왼쪽', '정면', '오른쪽']
    const [myChoice, setMyChoice] = useState("")
    const [comChoice, setComChoice] = useState("")
    const [round, setRound] = useState(0)
    const [result, setResult] = useState("")

    /* 
        나의 선택 : myChoice 
        상대방 수비 : comChoice 
        결과 : result 

        상대방의 선택은 랜덤하게 결정 
    */

    const posRandom = (myPos) => {
        setMyChoice(myPos)
        setComChoice(pos[Math.floor(Math.random() * 3)])
        setRound(round + 1)
    }

    const gameReset = () => {
        setMyChoice("")
        setComChoice("")
        setResult("")
        setRound(0)
    }

    useEffect(() => {
        if (round > 0) {
            myChoice === comChoice ? setResult('승리') : setResult('패배')
        }
    }, [round])

    const posMap = pos.map((item, index) => <Button
        key={index}
        variant="outline-warning"
        onClick={() => {
            posRandom(item)
            console.log(round);
        }}>{item}</Button>)


    return (
        <div>
            <h1>참참참 게임</h1>
            <p>나의 공격 : {myChoice}</p>
            <p>상대방 수비 : {comChoice}</p>
            <p>결과 : {result}</p>
            <hr />
            {/* pos 배열에 맡게 map 세팅 */}
            {posMap}{' '}

            <Button variant="outline-danger" onClick={gameReset}>초기화</Button>{' '}

        </div>

    )

}

export default Ex15