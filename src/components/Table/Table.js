// import API from "../../utils/API";
import axios from 'axios';
import React from 'react';


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








}