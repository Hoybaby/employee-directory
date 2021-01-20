import React, { Component } from 'react';
import API from '../../utils/API';


export default class TableInfo extends Component() {

    state = {
        search: "name",
        employees: [{}]
    };

    componentDidMount() {
        
        API.getEmployeeName().then(response => {
                console.log(response);
                this.setState(
                    {
                        // API returns "results" 
                        employees: response.data.results
                    }
                )

            })
            .catch((err) => {
                console.log(err);
            })
    
    }

    // handleInputChange = (event) => {
    //     const { name, value } = event.target;
    //     this.setState(
    //         {
    //             [name]: value
    //         }
    //     )
    // }

    // loadEmployees = () => [
    //     getEmployeeName()
    //         .then((response) => {
    //             console.log(response);
    //             this.setState(
    //                 {
    //                     // API returns "results" 
    //                     employees: response.data.results
    //                 }
    //             )

    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })
    // ]

    // findEmployee = () => {
    //     getEmployeeName()
    //         .then((response) => {
    //             console.log(response);

    //             let filter = this.state.search;

    //             let filteredList = response.data.results.filter(item => {

    //                 let values = Object.values(item.name.first)
    //                     .join("")
    //                     .toLowerCase();
    //                 return values.indexOf(filter.toLowerCase()) !== -1;
    //             });

    //             this.setState(
    //                 {
    //                     employees: filteredList
    //                 }
    //             )


    //         })

    //         .catch((err) => {
    //             console.log(err);

    //         })
    // }

    // handleInputSubmit = (event) => {
    //     event.preventDefault();
    //     console.log("stuff");

    //     this.searchEmployee();

    // }


    // SortByName = (e) => {
    //     function handleClick(e) {
    //         e.preventDefault();
    //         console.log('The link was clicked!');
    //     }
    // }


    render () {
        return (

        <div>
            {JSON.stringify(employees)}
    
        </div>
    
        )}
}