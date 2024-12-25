import React from "react";
interface IPorps{
    name : string;
    age : number;
    title : string;
}
let Customer : React.FC<IPorps>= ({name,age,title}) =>{
    console.log(name,age,title)
    return (
        <React.Fragment>
            <h1>Costumer</h1>
        </React.Fragment>
    )
}
export default Customer;