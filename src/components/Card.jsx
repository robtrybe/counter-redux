import React, { Component } from 'react';
import './Card.css';
import { connect } from 'react-redux';
import { actionIncCounter, actionDescCounter } from '../redux/actions';

class Card extends Component{

    render(){
        const { counter, incCounter, descCounter  } = this.props;
        console.log(this.props);
        return (
        <div className="card" >
            <div className="title">Contador</div>
            <div className="content">
                <div className="display-container">
                    <div className="display">{ counter }</div>
                </div>
                <div className="btn-container">
                    <button
                        type="button"
                        className="desc"
                        onClick={ () => descCounter()}
                        >-</button>
                    <button
                        type="button"
                        className="inc"
                        onClick={ () => incCounter()}
                        >+</button>
                </div>
            </div>
        </div>
        )
    }
}

const mapStateToProps = (state) => ({ ...state.counterReducer})

const mapDispatchToProps = (dispatch) => ({
incCounter: (data) => dispatch(actionIncCounter(data)),
descCounter: (data) => dispatch(actionDescCounter(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Card);
