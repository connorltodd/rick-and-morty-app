import React from "react";

function Searchbar (props) {
    console.log(props)
    return (
        <div>
            <input type="text" onChange={props.searchInputFunction} />
        </div>
    )
}


export default Searchbar;