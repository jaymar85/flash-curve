import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class Register extends Component {
    render() {
        return (
            <div>
                Register
                <div>
                    <Link to="/user">Sign Up</Link>
                </div>
            </div>
        )
    }
}
