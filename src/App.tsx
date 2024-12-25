import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Costumer from './Components/Customer'
import { CostumerClass } from './Components/CostumerClass';
import Employee from './Components/Employee';
import { EmployeeClass } from './Components/EmployeeClass';
import Counter from './Components/Counter';
import Greetings from './Components/Greetings';
import LoginForm from './Components/LoginForm';
import List from './Components/UserList';
import UserListOnline from './Components/userListOnline';
import './index.css'

function App() {
  return (
    <React.Fragment>
      <div className="container mt-3">
      <div className="grid">
        <div className="row">
          <div className="col">
            <p className="h4 text-success">App Component</p>
            <p className='fst-italy'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum id provident nemo eius consequuntur sit ullam, natus, labore veniam iure accusamus possimus? Dolores adipisci vitae, qui at minima similique cumque.</p>
          <button className='btn btn-success '>
            <i className='fa fa-book'></i>Read More</button>
          </div>
        </div>
      </div>
      <div className="row">
      <div className="costumer">
        <Costumer name ={'rajan'} age = {25} title = {'jaga'}/>
      </div>
    </div>
    <div className="row">
      <div className="customerClass">
        <CostumerClass name ={'rajan'} age = {25} title = {'jaga'}/>
      </div>
    </div>
    <div className="row">
      <div className="employee">
        <Employee/>
      </div>
    </div>
    <div className="row">
      <div className="employeeClass">
        <EmployeeClass/>
      </div>
    </div> 
    <Counter/>
    <Greetings/> 
    <LoginForm/>
    <List/>
      <UserListOnline/>
    </div>
    
    </React.Fragment>
    
  );
}

export default App;
