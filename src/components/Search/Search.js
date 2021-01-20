import "./style.css";
import React from "react";




function Search(props) {
    return (
        <div class="container-fluid-center">
            <form class='d-flex'>
                <input name="search" class="form-control me-2" type="search" placeholder="Search" value={props.search} onChange={props.handleInputChance}/>
            </form>
        </div>

    )
}
export default Search;
