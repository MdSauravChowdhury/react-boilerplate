import React from 'react'
import './App.css';
import Item from './item';

const items = (props) => {
    return (
        <div className="box">
            {/* <Item items={props.item}/> */}
            {props.item.map((item) => (<Item key={item.id} item={item}/>))}
            {props.children}
        </div>
    )
}

export default items
