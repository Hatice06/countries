import React from "react";

function Search(props) {

   

 return (  
      <div className="search-bar">
        <input type="text" placeholder="Search for a country..." onChange={props.handleChange}></input>
      </div>

  );
}

export default Search;
