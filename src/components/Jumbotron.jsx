import React from "react";
import SearchBox from "./SearchBox";

const JumbotronPage = (props) => {
  return (
    <div id="jumbotron-picture">
      <div>
        <SearchBox {...props} handleRouter={(e) => props.handleRouter(e)} />
      </div>
    </div>
  );
};

export default JumbotronPage;
