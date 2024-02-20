import React from 'react'
import Card from 'react-bootstrap/Card';

const PokemonCard = ({ item }) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" style={{ height: "300px" }} src="" />
                <Card.Body>
                    <Card.Title>{item.no}{item.name}</Card.Title>
                    <Card.Text style={{ height: "150px" }}>
                        <table>
                            <thead>종족치</thead>
                            <tbody>
                                <tr>
                                    <td>공격</td>
                                    <td>{item.attack}</td>
                                </tr>
                                <tr>
                                    <td>방어</td>
                                    <td>{item.defense}</td>
                                </tr>
                                <tr>
                                    <td>특수공격</td>
                                    <td>{item.sa}</td>
                                </tr>
                                <tr>
                                    <td>특수방어</td>
                                    <td>{item.sd}</td>
                                </tr>
                                <tr>
                                    <td>스피드</td>
                                    <td>{item.speed}</td>
                                </tr>
                            </tbody>
                        </table>
                    </Card.Text>

                </Card.Body>
            </Card>
        </div>
    )
}

export default PokemonCard