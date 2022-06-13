import * as React from "react";
import "../App.css";

export function DataSource(props) {
    return(
        <div className="data-sources">
          <p>{props.source}</p>
        </div>
    );
}

export default DataSource;