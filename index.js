import React from "react";
import ReactDOM from "react-dom/client";

const Title = ()=>{
    return (
    <h1 className="title" tabIndex="5">
        This is Component one title
    </h1>
)}

const HeadingComponent = ()=>(
    <div className="container">
        <Title/>
        <h1 className="heading" tabIndex="5">
        This is heading in component 2
    </h1>

    </div>

);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);

