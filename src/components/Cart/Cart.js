import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from '../../context';
import CartList from './CartList';
import CartTotals from './CartTotals';

export default class Cart extends Component {
    render(){
        return(
            <section>
                <ProductConsumer>
                    {value => {
                        const {cart} = value;
                        if(cart.length >0){
                            return(
                                <>
                                <Title name="your" title="Cart"/>
                                <CartColumns />
                                <CartList value={value} />
                                <CartTotals value={value} history={this.props.history}/>
                                </>
                            );
                        }
                        else{
                            return(
                                <EmptyCart />
                            );
                        }
                    }}
                </ProductConsumer>
            </section>
        )
    }
}