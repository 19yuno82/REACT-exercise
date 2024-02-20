import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// const Ex06Box = (props) => {
//     return (
//         <div>
//             <Card style={{ width: '18rem' }}>
//                 <Card.Img variant="top" style={{height:"300px"}} src={props.pic} />
//                 <Card.Body>
//                     <Card.Title>{props.title}{props.birth}</Card.Title>
//                     <Card.Text style={{height:"150px"}}>
//                         {props.contents}
//                     </Card.Text>
//                     <a href={props.sns} target="_blank">
//                     <Button variant="primary">instargram</Button>
//                     </a>
//                 </Card.Body>
//             </Card>
//         </div>
//     )
// }

//샘 풀이 코드
const Ex06Box = ({item}) => {
    console.log('item', item)
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" style={{height:"300px"}} src={item.imgSrc} />
                <Card.Body>
                    <Card.Title>{item.title}{item.birthYear}</Card.Title>
                    <Card.Text style={{height:"150px"}}>
                        {item.content}
                    </Card.Text>
                    <a href={item.SNS} target="_blank">
                    <Button variant="primary">instargram</Button>
                    </a>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Ex06Box