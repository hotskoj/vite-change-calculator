import React from "react";

export default function Card(props) {
    return (
        <div className="col-3 text-center">
            <div className="card">
                <div className="card-header">
                    <h5 className="card-title">{props.title}</h5>
                </div>
                <div className="card-body">
                    <p className="card-text">{props.content}</p>
                </div>
            </div>
        </div>
    );
}