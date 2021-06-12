import React from "react";

const Item = (props) => {
    return (
        <div className="single-item">
            <div key={props.item.id}>
                <h1>Name: {props.item.name ? props.item.name : "not found"}</h1>{" "}
                <h2>
                    Email: {props.item.email ? props.item.email : "not found"}
                </h2>{" "}
                <h3>
                    {props.item.username ? props.item.username : "not found"}
                </h3>
            </div>
        </div>
    );
};

export default Item;
