import React, {useState} from 'react';
import "./Login.css"

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        fetch('http://localhost:3435/login/user', {
        method: 'POST',
        body: JSON.stringify({email, password}),
        headers: {
        'Content-type': "application/json"// The type of data you're sending
        }
        }); 
        
    } 

    return (
        <div className="containerLoginAll">
            <form className="containerLogin" onSubmit={handleLogin}>

<h3>Login</h3>
<br />


<div className="row">
    <div className="col-26">
        <label for="lname">Email</label>
    </div>
    <div className="col-76">
        <input type="text" placeholder="Pleace enter your Email" value={email} onChange={(e) => setEmail(e.target.value) } />
    </div>
</div>

<div className="row">
    <div className="col-26">
        <label for="lname">Password</label>
    </div>
    <div className="col-76">
        <input type="text" placeholder="Please enter your password" value={password} onChange={(e) => setPassword(e.target.value) } />
    </div>
</div>
<div className="row">
    <input type="submit" value="Submit"/>
</div>
</form>
        </div>
    )
}

export default Login
