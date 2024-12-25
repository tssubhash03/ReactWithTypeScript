import React, { useState } from "react";
import { IList } from "../models/IList";

interface Iprops{}
interface IState {
    user : IList[]
}
let List : React.FC<Iprops>= ()=>{
    let [state,setState] = useState<IState>({
        user : [
            {
                sn0:'AA01',
                name:'John',
                age :25,
                role : 'frontend'
            },
            {
                sn0:'AA02',
                name:'Priya',
                age :24,
                role : 'S.frontend'
            },
            {
                sn0:'AA03',
                name:'Jack',
                age :21,
                role : 'Jr.frontend'
            }
        ]
    })
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="h3"> User List</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <table className="table table-center table-hover table-striped">
                            <thead className="bg-danger text-white">
                                <tr>
                                    <th>Sn</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Role</th> 
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    state.user.length >0 && 
                                    state.user.map(us =>{
                                        return (
                                            <tr>
                                                <td>{us.sn0}</td>
                                                <td>{us.name}</td>
                                                <td>{us.age} yrs</td>
                                                <td>{us.role}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default List;