import React from "react";

interface IPorps{}
interface IState{
    name : String ;
    age : number;
    title : String;
}
export class EmployeeClass extends React.Component<IPorps,IState>{
    constructor(props : IPorps){
        super(props);
        this.state = {
            name : "Rajan" ,
            age : 25,
            title : "Software"
        } as IState;
    }
    render(){
        
        return (
            <React.Fragment>
                <h1>EmployeeClass</h1>
            <ul className="list-group">
                    <li className="list-group-item">
                        Name : {this.state.name}
                    </li>
                </ul>
                <ul className="list-group">
                    <li className="list-group-item">
                        Age : {this.state.age}
                    </li>
                </ul>
                <ul className="list-group">
                    <li className="list-group-item">
                        Title : {this.state.title}
                    </li>
                </ul>
            </React.Fragment>
        )
    }
    
}