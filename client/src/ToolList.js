import React from "react";
import Tool from "./Tool";

export default function ToolList(props) {
  const { tools } = props;
  const toolRows = tools.map((tool, idx) => (
      <div className="ui items" key={idx}>
        <Tool tool={tool} 
          onToolChange={props.onToolChange}/>
      </div>
    ));

  return (
    <div>{toolRows}</div>
  );
}
