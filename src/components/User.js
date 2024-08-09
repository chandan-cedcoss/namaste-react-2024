const User = (props) => {
    const {name,location} = props;
    return <div className="user-card">
        <h1>{name}</h1>
        <h2>{location}</h2>
        <h3>Contact: csp7089@gmail.com</h3>
    </div>
}
export default User;