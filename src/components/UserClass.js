import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count : 0
        }
        console.log(this.props.name+"Child Cons")
    }

    componentDidMount(){
        console.log(this.props.name+'child mount');
    }

    render() {
        console.log(this.props.name+"Child render");
        const {name,location} = this.props;
        const {count} = this.state;
        return (
            <div className="user-card">
                <p>Count : {count}</p>
                <button onClick={() => {
                    {this.setState({
                        count: this.state.count+1
                    })}
                }}>Increase Button</button>
                <h1>{name}</h1>
                <h2>{location}</h2>
                <h3>Contact: csp7089@gmail.com</h3>
            </div>
        )
    }
}

export default UserClass;