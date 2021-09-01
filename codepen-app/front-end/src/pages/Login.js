import React from 'react';
import "./Login.css"

function Login() {
    return (
        <div className="containerLoginAll">
            <form className="containerLogin">

<h3>Login</h3>
<br />


<div className="row">
    <div className="col-26">
        <label for="fname">Name</label>
    </div>
    <div className="col-76">
        <input type="text" placeholder="Pleace enter your name" />
    </div>
</div>

<div className="row">
    <div className="col-26">
        <label for="lname">Email</label>
    </div>
    <div className="col-76">
        <input type="text" placeholder="Pleace enter your Email" />
    </div>
</div>

<div className="row">
    <div className="col-26">
        <label for="lname">Password</label>
    </div>
    <div className="col-76">
        <input type="text" placeholder="Please enter your password" />
    </div>
</div>
<div className="row">
    <input type="submit" value="Submit" />
</div>
</form>
        </div>
    )
}

export default Login
