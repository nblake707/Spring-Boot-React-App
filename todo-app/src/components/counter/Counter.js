import React from 'react';
import './Counter.css'

const Counter = props => {
    return (
        <section>
        <div className="counter">
            <button>+1</button>
            <span className="count">0</span>
        </div>
        </section>
    )
}

export default Counter;
