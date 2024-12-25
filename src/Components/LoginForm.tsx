import React, { useState } from "react";
import { Iuser } from "../models/IUser";

interface Iprops{}
interface IState {
    user : Iuser
}
let LoginForm : React.FC<Iprops>= () =>{
    let [state,setState] = useState<IState>({
        user : {
            username :"",
            password : ""
        }
    })
    let UpdateChange = (event:React.ChangeEvent<HTMLInputElement>):void=>{
        setState ({
            user : {
                ...state.user,
                [event.target.name]:event.target.value
            }
        })
    }
    let login =(event:React.FormEvent<HTMLFormElement>):void=>{
        event.preventDefault()
        console.log(state.user)
    }
    return(
        
       <React.Fragment>
        <pre>{JSON.stringify(state.user)}</pre>
         <form onSubmit={login}>
         <div className="container mt-5">
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-header text-center text-white bg-primary">
                            <p className="h3">Login Here</p>
                        </div>
                        <div className="card-body">
                            <div className="mb-2">
                                <input 
                                onChange={UpdateChange}
                                name ="username"
                                value ={state.user.username}
                                type="text" className="form-control "placeholder="Username"
                                  />
                            </div>
                            <div className="mb-2">
                                <input 
                                onChange={UpdateChange}
                                name ="password"
                                value ={state.user.password}type="password" className="form-control "placeholder="Password" />
                            </div>
                            <div className="mb-2">
                                <input type="submit" className="form-submit btn btn-primary "/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         </form>
       </React.Fragment>
    )
}
export default LoginForm