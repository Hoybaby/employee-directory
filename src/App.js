import logo from './logo.svg';
import './App.css';
import Jumbotron from './components/Jumbo/Jumbo';
import Search from './components/Search/Search';
import TableBootstrap from './components/Table/Table';
import axios from "axios";
import React, { useState, useEffect } from "react";
import { render } from '@testing-library/react';
import getEmplyoeeName from './utils/API';



function App() {

  // let [users, setUsers] = useState([]);
  // // The useEffect() hook fires any time that the component is rendered.
  // // An empty array is passed as the second argument so that the effect only fires once.
  // useEffect(() => {
  //   axios
  //     .get("https://randomuser.me/api/?results=200&nat=us")
  //     .then(response => setUsers(response.data));
  // }, []);
    state={
      search: "name",
      employees: []
    };

    componentDidMount = () => {
      this.loadEmployees();
    }

    handleInputChange = (event) => {
      const { name, value} = event.target;
      this.setState (
        {
          [name]: value
        }
      )
    }

    lloadEmployees = () => [
      getEmployeeName()
          .then((response) => {
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
  ]

  findEmployee =() => {
    getEmployeeName()
      .then((response) => {
        console.log(response);

        let filter = this.state.search;

        let filteredList = response.data.results.filter(item => {

          let values = Object.values(item.name.first)
        })
      })
  }

  
    
  return (
    
    <div className="App">
      {/* <h2>The JSON below is loaded from an external API!</h2>
      <code>{JSON.stringify(users)}</code> */}
    {/* </div> */}
    {/* // <div> */}
    //   <Jumbotron/>
    //   <Search/>
    //   <TableBootstrap/>
      
    // </div>
  );
  
}

export default App;
