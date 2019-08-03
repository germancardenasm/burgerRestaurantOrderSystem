import React, { Component } from 'react';
import BurgerGraphic from '../../components/Burger/BurgerGraphic/BurgerGraphic'
import Aux from '../../hoc/Aux'
import './BurgerBuilder.css'

export default class BurgerBuilder extends Component {
    
    render() {
        return (
            <Aux>
               <BurgerGraphic />
                <div>this are the ingredients Controls</div>
            </Aux>
        )
    }
}
