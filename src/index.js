import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    greeting({name:'Stuart',luckyNumber:luckyNuber()}),
    document.getElementById('root')
);

function luckyNuber(){
    return Math.floor(Math.random()*1000);
}

function greeting(user){
    const greeting = (
        <div className='container'>
            <h1>Welcome {user.name}</h1>
            <h2 className="text-muted"> Your lucky number is: {user.luckyNumber}</h2>
        </div>
    );
    return greeting;
}