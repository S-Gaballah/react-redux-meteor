import React from "react";
import {Link} from "react-router"

class HomePage extends React.Component {
    render(){
        return (
            <div className="jumbotron">
                <h1>Home Page</h1>
                <p>React & Redux</p>
                <Link to="courses" className="btn btn-primary btn-large">Go To Courses</Link>
            </div>
        );
    }
}

export default HomePage;