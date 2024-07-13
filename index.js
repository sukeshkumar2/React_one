import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("div",{
    id : "parent"
},[React.createElement("div",{
    id : "child"
},
[React.createElement("h1",{id : "heading"},"Hello World from React Child 1"),React.createElement("h1",{id : "heading2"},"heading 2 from React Child 1")]),
React.createElement("div",{
    id : "child2"
},
[React.createElement("h1",{id : "heading"},"Hello World from React Child 2"),React.createElement("h1",{id : "heading2"},"heading 2 from React Child 2")])]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);