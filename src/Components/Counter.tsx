import React, { useState } from "react";
interface Iprops {}
interface Istate {
    count : number
}
let Counter : React.FC<Iprops>= () =>{
    let [state,setState] = useState<Istate>({
        count : 0
    })
    let Increment = ()=>{
        setState({
            count : state.count +1
        })
    }
    let Decrement = ()=>{
        setState({
            count : state.count -1
        })
    }
    return (
        <React.Fragment>
            <h1>Counter</h1>
            <div className="contaniner">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <p className="h3">{state.count}</p>
                                <button className="btn btn-success m-1 " onClick={Increment}>Increment</button>
                                <button className="btn btn-danger m-1" onClick={Decrement}>Decrement</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Counter;