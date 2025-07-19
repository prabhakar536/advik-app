import axios from 'axios'

const EMPLOYEE_BASE_URL = 'http://localhost:8080/api/v1/employee/getAllEmployees'

class EmployeeService{

getEmployees(){
console.log('getEmployee')
// return axios.get('http://localhost:8080/hello-world')
return axios.get(EMPLOYEE_BASE_URL)
}

}

export default new EmployeeService;