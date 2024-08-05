import React from "react";
import ReactDOM from "react-dom/client";


//React Element:
const JsxHeading = () => (<h1 className="heading" tabIndex={1}>Namaste React Using JSX</h1>);

//React Functional Component with component composition:
const HeadingComponent = () => (<div id="heading"><JsxHeading /><h1>This is the first namsate react functional component..!!</h1></div>);



console.log(HeadingComponent); // return and javascript object.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />); // render function converts heading object into a html tag.
