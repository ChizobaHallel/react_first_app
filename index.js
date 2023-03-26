// const React = require("react");
// const ReactDOM = require("react-dom");


// const element = React.createElement("h1", null, "Sup peoples !!!!!");
// ReactDOM.render(element, document.getElementById("root"));
// ReactDOM.render(<ul>
//     <li>Hi my name is Hallel</li> 
//     <li>who are you</li>
//     <li>why are you alive</li>
//     </ul>, document.getElementById("root"))

const h1 = document.createElement("h1")
h1.textContent = "This is an imperative way to program"
h1.className = "header"
document.getElementById("root").append(h1)

