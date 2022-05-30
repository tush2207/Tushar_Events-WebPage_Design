import React from 'react';
import Product from './Product';
import { Link } from 'react-router-dom';
import './Main.css'


export default function Main(props){

    const{products, onAdd} = props;
    return (
        <main>
            <h3>Catalogue</h3>
            <div className='product'>
                {products.map((product) => (
                    <Product key={product.id} product={product} onAdd={onAdd}></Product>
                ))}
                
            </div>
        </main>
    )
}