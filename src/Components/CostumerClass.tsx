import React from "react";
interface Iprops{
    name : String;
    age : number;
    title : String;
}
interface IState{}
export class CostumerClass extends React.Component<Iprops,IState>{
    constructor(props:Iprops){
        super(props)//must contain in constructor
    }
    render() {
        let {name,age,title} = this.props
        return(
            <React.Fragment>
                <h3>Customer Class</h3>
                <ul className="list-group">
                    <li className="list-group-item">
                        Name : {name}
                    </li>
                </ul>
                <ul className="list-group">
                    <li className="list-group-item">
                        Age : {age}
                    </li>
                </ul>
                <ul className="list-group">
                    <li className="list-group-item">
                        Title : {title}
                    </li>
                </ul>
            </React.Fragment>
        )
    }

}