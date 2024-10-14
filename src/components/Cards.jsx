import React, {useState} from "react";
import Card from "./Card";

export default function Cards(props){
    const {change, twenties, tens, fives, ones, quarters, dimes, nickles, pennies} = props.money;

    return (
        <div className="col-8 m-2 column-background">
            <div className={change >= 0 ? "alert alert-success text-center my-3" : "alert alert-danger text-center my-3"} role="alert">
                The total change due is ${change}
            </div>
            <div className="row my-3 d-flex flex-row justify-content-center">
                <Card title="Twenties" content={twenties}/>
                <Card title="Tens" content={tens}/>
                <Card title="Fives" content={fives}/>
                <Card title="Ones" content={ones}/>
            </div>
            <div className="row my-3 d-flex flex-row justify-content-center">
                <Card title="Quarters" content={quarters}/>
                <Card title="Dimes" content={dimes}/>
                <Card title="Nickels" content={nickles}/>
                <Card title="Pennies" content={pennies}/>
            </div>
        </div>
    );
}