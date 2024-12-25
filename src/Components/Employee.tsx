import React, { useState } from "react";

interface IPorps{}
interface IState{
    name : String ;
    age : number;
    title : String;
}
let Employee : React.FC<IPorps> = ()=>{
    let [state,setState] = useState<IState>({
        name : "Rajan" ,
        age : 25,
        title : "Software"
    })
    return(
        <React.Fragment>
            <h1>Employee</h1>
            <ul className="list-group">
                    <li className="list-group-item">
                        Name : {state.name}
                    </li>
                </ul>
                <ul className="list-group">
                    <li className="list-group-item">
                        Age : {state.age}
                    </li>
                </ul>
                <ul className="list-group">
                    <li className="list-group-item">
                        Title : {state.title}
                    </li>
                </ul>
        </React.Fragment>
    )
}
export default Employee;