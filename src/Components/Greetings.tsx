import React, { useState } from "react";
interface Iprops {}
interface Istate {
    message : string
}
let Greetings : React.FC<Iprops>= () =>{
    let [state,setState] = useState<Istate>({
        message : "Hello"
    })
    let ChangeMessage = (greet : string) : void=>{
        setState({
            message : greet
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
                                <p className="h3">{state.message}</p>
                                <button className="btn btn-success m-1 " onClick={()=>ChangeMessage('Good Morning')}>Good Morning</button>
                                <button className="btn btn-warning m-1" onClick={()=>ChangeMessage('Good Afternoon')}>Good Afternnon</button>
                                <button className="btn btn-danger m-1" onClick={()=>ChangeMessage('Good Night')}>Good night</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Greetings;