import React from "react";
import ReactDOM from 'react-dom/client';

// const heading= React.createElement("h1",{},"hello fuck you")

// const parent=React.createElement("div",{id: "parent"},
//    [ React.createElement("div", {id:"child"},
//     [
//         React.createElement("h1",{},"i am h1 and you"),
//     React.createElement("h2",{},"i am h2 and you"),
//     ]
// )]
// );

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "h1"),
//     React.createElement("h2", {}, "h2"),
//   ]),
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "h1"),
//     React.createElement("h2", {}, "h2"),
//   ]),
// ]);




// now we are not using react element by next 
// but this is core react and fundatmentl of react

// now we use the jsx 

const parent=React.createElement("div",{id:"main"},[
  React.createElement("div",{id:"child"},

  [React.createElement("h1",{},"This is after the problems h1"),
  React.createElement("h3",{},"hlowh3")]),

  React.createElement("div",{id:"child2"},

  [React.createElement("h2",{},"This is not well h1"),
  React.createElement("h4",{},"hlowh3")])
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);