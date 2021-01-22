import "./style.css";
import React from "react";




function Search({handleInputChange}) {
    return (
        <div className="container-fluid-center">
            <form className='d-flex'>
                <input name="search" className="form-control me-2" type="text" placeholder="Search" onChange={e => handleInputChange(e)}/>
            </form>
        </div>

    )
}
export default Search;
