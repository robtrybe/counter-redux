import React, { Component } from 'react';
import './Card.css';

class Card extends Component{
    render(){
        return (
        <div className="card" >
            <div className="title">Contador</div>
            <div className="content">
                <div className="display-container">
                    <div className="display">0</div>
                </div>
                <div className="btn-container">
                    <button type="button" className="desc">-</button>
                    <button type="button" className="inc">+</button>
                </div>
            </div>
        </div>
        )
    }
}

export default Card;
