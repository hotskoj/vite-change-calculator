import React, { useState } from "react";

export default function Form(props){
    const [amounts, setAmounts] = useState({
        amountDue: 0,
        amountReceived: 0
    })

    function handleChange(event) {
        const {name, value} = event.target;

        setAmounts(prevValue => {
            return Object.assign({}, prevValue, {[name]: value});
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.onCalculate(amounts);
    }

    return (
        <form onSubmit={handleSubmit} className="col-3 m-2 d-flex flex-column justify-content-evenly column-background">
            <div className="form-header">
                Enter Information
                <hr/>
            </div>
            <div>
                <label htmlFor="amount-due" className="form-label">How much is due?</label>
                <input onChange={handleChange} type="number" className="form-control" name="amountDue" step=".01" value={amounts.amountDue}/>
            </div>
            <div>
                <label htmlFor="amount-received" className="form-label">How much was received?</label>
                <input onChange={handleChange} type="number" className="form-control" name="amountReceived" step=".01" value={amounts.amountReceived}/>
            </div>
            <div>
                <button type="submit" className="btn btn-success">Submit</button>
            </div>
        </form>
    );
}

