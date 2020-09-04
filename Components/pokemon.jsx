import React from 'react';

export default function Pokemon(props) {
    return (
        <div className="container">
            <img src={props.image}/>
            <p>{props.pokeName}</p>
        </div>
    )
}
