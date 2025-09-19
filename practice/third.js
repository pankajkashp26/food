import React from "react";
import ReactDOM from 'react-dom/client';

// const heading= <h1>Helllllow</h1>

// const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading)

const number= 10000
const HeadingComponent= ()=>(
    <div id ="container">
        {number}
        <h2>{100+200}</h2>
     <h1>This is fuck</h1>
    </div>
);

const app=()=>{
    return <div className="app"></div>
};
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<app/>)
 