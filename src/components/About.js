import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {
    constructor(props) {
        super(props);
        console.log("Parent Cons")
    }

    componentDidMount(){
        console.log('parent mount');
    }

    render() {
        console.log("Parent render")
        return (
            <div>
                Logged In User 
                <UserContext.Consumer>
                    {(loggedInUser) => {
                        <h1>{loggedInUser}</h1>
                    }}
                </UserContext.Consumer>
                <UserClass name={"firstcLass"} location={"lucknow Uttarpradesh "} />
                <UserClass name={"secondClass"} location={"lucknow Uttarpradesh "} />
            </div>
        );
    }
}

export default About;