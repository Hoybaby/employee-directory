import "./style.css";
const Search = () => {
    return (
        <div className="test2">
            <form className="form-inline my-2 my-lg-0 text-center">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    );
}

export default Search;