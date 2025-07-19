import { Component } from "react";
import EmployeeService from "../EmployeeService";


export default class EmployeeComponent extends Component{

constructor(props){
    super(props)
    this.state = {
        employees:[
            // {'id':'123','name':'Prabhakar Karre', 'designation':'Associate','salary':'80000','company':'CTS','address':'Ladnoor'}
            // ,{'id':'143','name':'Prabhakar Karre', 'designation':'Associate','salary':'80000','company':'CTS','address':'Ladnoor'}
        ]
        
    }
    this.getEmployees = this.getEmployees(this)

}

    render(){

        return(
            <div>
                <h4>Employee Data</h4>
                <table>
                    <thead>
                        <tr>
                            <th>Employee Id</th>
                            <th>Employee Name</th>
                            <th>Designation</th>
                            <th>Salary</th>
                            <th>Company</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.employees.map(
                                employee=>
                                
                                <tr>
                                    <td>{employee.empId}</td>
                                    <td>{employee.empName}</td>
                                    <td>{employee.designation}</td>
                                    <td>{employee.salary}</td>
                                    <td>{employee.company}</td>
                                    <td>{employee.address}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

        )
    }
    getEmployees(){
       
        EmployeeService.getEmployees().then((response)=>{
            console.log(response)
            this.setState({employees:response.data})
        } );
    }
}

