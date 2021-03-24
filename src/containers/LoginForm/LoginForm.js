import React, {useState} from "react";
const LoginForm = props => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const validateForm = () => {
        return username.length > 0 && password.length > 0;
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()
        props.onSubmit(username, password)
    }
    return (
        <div>

            <form onSubmit={onSubmitHandler}>
                <div>
                    <label>Username</label>
                    <input type="text" id="username-input" value={username} onChange={e => setUsername(e.target.value)}/>
                </div>

                <div>
                    <label>Password</label>
                    <input type="password" id="password-input" value={password} onChange={e => setPassword(e.target.value)}/>
                </div>
                <button type="submit" id="login-button" disabled={!validateForm()}>Submit</button>
            </form>
        </div>
    )
}

export default LoginForm;