import "./style.css";
import React from "react";

function Search() {
    return (
        <div>
            <form onSubmit={this.props.handleSubmit}>
                <input 
                name="search"
                value={this.props.search}
                onChange={this.props.handleInputChange}
                >
                </input>

                <button>
                    Search
                </button>
            </form>
        </div>
    )
}

export default Search;


// const Search = (props) => {
//     return (
//         <div className="test2">
//             <form onSubmit={this.props.handleSubmit} className="form-inline my-2 my-lg-0 text-center">
//                 <input className="form-control mr-sm-2" 
//                 type="search" 
//                 placeholder="Search" 
//                 aria-label="Search"/>
//                     <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//             </form>
//         </div>
//     );
// }

// export default Search;