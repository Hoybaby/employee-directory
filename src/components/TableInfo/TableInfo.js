import React, { Component } from 'react';
import getEmployeeName from '../../utils/API';


export default class TableInfo extends Component() {

    // let [users, setUsers] = useState([]);
    // // The useEffect() hook fires any time that the component is rendered.
    // // An empty array is passed as the second argument so that the effect only fires once.
    // useEffect(() => {
    //   axios
    //     .get("https://randomuser.me/api/?results=200&nat=us")
    //     .then(response => setUsers(response.data));
    // }, []);
    state = {
        search: "name",
        employees: []
    };

    componentDidMount = () => {
        this.loadEmployees();
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState(
            {
                [name]: value
            }
        )
    }

    loadEmployees = () => [
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

    findEmployee = () => {
        getEmployeeName()
            .then((response) => {
                console.log(response);

                let filter = this.state.search;

                let filteredList = response.data.results.filter(item => {

                    let values = Object.values(item.name.first)
                        .join("")
                        .toLowerCase();
                    return values.indexOf(filter.toLowerCase()) !== -1;
                });

                this.setState(
                    {
                        employees: filteredList
                    }
                )


            })

            .catch((err) => {
                console.log(err);

            })
    }

    handleInputSubmit = (event) => {
        event.preventDefault();
        console.log("stuff");

        this.searchEmployee();

    }


    SortByName = (e) => {
        function handleClick(e) {
            e.preventDefault();
            console.log('The link was clicked!');
        }
    }


    return (

        <div className="App">
            {/* <h2>The JSON below is loaded from an external API!</h2>
        <code>{JSON.stringify(users)}</code> */}
            {/* </div> */}
            {/* // <div> */}
      //   <Jumbotron />
      //   <Search />
      //   <TableBootstrap />

      // </div>
    );

}

export default TableInfo;
