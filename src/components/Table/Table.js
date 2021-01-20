// import API from "../../utils/API";
import axios from 'axios';
import React from 'react';
import Search from '../Search/Search';


class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            search: "",
            sortDirection: 0,
        };
    }

    //With the help from Vlad and TA they showed me 20-07 activity had a lot.


    componentDidMount() {
        axios.get("https://randomuser.me/api/?results=25&nat=us")
            .then((res)=> {
                this.setState({ employees: res.data.results});
            });
    }

    handleInputChange =(event) => {
        let { name, value } = event.target;
        this.setState({
            [name] : value,
        });
    };

    sortByName() {
        if (this.state.sortDirection <1 ) {
            this.setState({
                employees: this.state.employees.sort((a,b) => 
                    a.name.first > b.name.first ? 1 : -1
                    ),
            });

            this.setState({ sortDirection: 1});
            
        } else {
            this.setState({
                employees: this.state.users.sort((a,b) => 
                    a.name <b.name.first ? 1: -1),
            });
            this.setState({ sortDirection: 0});
        }
    }


    render() {
        return (
            <div>
                <Search search={this.state.search} handleInputChange={this.handleInputChange}/>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Iamge</th>
                            <th onClick={() => this.sortByName()}Name></th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Date of Birthday</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employees
                            .filter(
                                (employees) =>
                                    employees.name.first
                                        .toLowerCase()
                                        .includes(this.state.search.toLocaleLowerCase()) ||
                                    employees.name.last
                                        .toLowerCase()
                                        .includes(this.state.search.toLowerCase())
                            )
                            .map((employees) => (
                                <tr key={employees.name}>
                                    <td>
                                        <img src={employees.picture.thumbnail} alt=""></img>
                                    </td>
                                    <td>
                                        {employees.name.first} {employees.name.last}
                                    </td>
                                    <td>{employees.phone}</td>
                                    <td>{employees.email}</td>
                                    <td>{employees.dob.date}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table;
