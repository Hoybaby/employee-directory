import "./style.css";
import React from "react";




function Search(props) {
    return (
        <div className="container-fluid-center">
            <form className='d-flex'>
                <input name="search" className="form-control me-2" type="search" placeholder="Search" value={props.search} onChange={props.handleInputChance}/>
            </form>
        </div>

    )
}
export default Search;
