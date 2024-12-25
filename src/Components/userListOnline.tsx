import React, { useEffect, useState } from "react";
import { IUserListOnline } from "../models/IUserListOnline";
import { UserListOnlineService } from "../Service/UserListOnlineService";
import { error } from "console";
interface Iprops{}
interface IState{
    loading : boolean;
    users : IUserListOnline[];
    errormessage : string;
}
let UserListOnline :React.FC<Iprops> = () =>{
    let[state,setState] = useState<IState>({
        loading : false,
    users : [] as IUserListOnline[],
    errormessage : ''
    })

    useEffect(()=>{
        setState({...state,loading : true})
        UserListOnlineService.getAllUsers()
        .then((response)=>{
            setState({
                ...state,
                loading: true,
                users: response.data as IUserListOnline[]
            })
        })
        .catch((err)=>{
            setState({
                ...state,
                loading :false,
                errormessage : err.message
            })
        })
    },[])
    return(

        <React.Fragment>
            <h3> Server connect on axios</h3>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <table className="table table-hover table-striped text-center">
                            <thead className="bg-sucess text-white">
                                <tr>
                                    <th>Sno</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Company</th>
                                    <th>Website</th>
                                </tr>
                            </thead>
                            <tbody>
                                {

                                    state.users.length >0 && state.users.map(user =>{
                                        return(
                                            <tr>
                                                <td>{user.id}</td>
                                                <td>{user.name}</td>
                                                <td>{user.email}</td>
                                                <td>{user.phone}</td>
                                                <td>{user.company.name}</td>
                                                <td>{user.website}</td>
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
export default UserListOnline