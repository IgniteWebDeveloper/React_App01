import React from 'react'
import './Card.css'

function Card(props) {
    let {image, title, desc} = props.card1;
    return (
        <div className="Card">

        {props.children}

        <div style={{backgroundImage: `url(${image})`}} className="image"></div>
        <hr/>
        <h3>{title}</h3>
        <p>{desc}</p>
        <button onClick={props.deleteCard} >Delete</button>
    </div>
    )
}

export default Card;