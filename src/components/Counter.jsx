// import React, { Component } from "react";
import "./Counter.css";

// export default class Counter extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0,
//         };
//     }

//     increment() {
//         this.setState({
//             count: this.state.count + 1,
//         });
//     }

//     decrement() {
//         if (!this.state.count <= 0) {
//             this.setState({
//                 count: this.state.count - 1,
//             });
//         } else {
//             this.setState({
//                 count: 0,
//             });
//         }
//     }

//     resetBtn() {
//         this.setState({
//             count: 0,
//         });
//     }
//     render() {
//         return (
//             <div className="counter">
//                 <h1 className="title">React Counter</h1>
//                 <h1 className="count">{this.state.count}</h1>
//                 <div className="buttons">
//                     <button onClick={(e) => this.decrement(e)}>-</button>
//                     <button className="reset" onClick={(e) => this.resetBtn(e)}>
//                         Reset
//                     </button>
//                     <button onClick={(e) => this.increment(e)}>+</button>
//                 </div>
//             </div>
//         );
//     }
// }

import React from "react";
// import { useState } from "react";
const Counter = () => {
    const [count, setCount] = React.useState(0);


    return (
        <div className="counter">
            <h1 className="title">React Counter</h1>
            <h1 className="count">{count}</h1>
            <div className="buttons">
                <button onClick={() => setCount(count - 1)}>-</button>
                <button className="reset" onClick={() => setCount(0)}>
                    Reset
                </button>
                <button onClick={() => setCount(count + 1)}>+</button>
            </div>
        </div>
    );
};

export default Counter;
