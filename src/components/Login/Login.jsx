
import "./Login.css";

import { useState } from "react";


const LoginState = {
    None: "none",
    Successful: "success ",
    WrongPassword: "wrongPassword",
    WrongLogin: "wrongLogin",
}

function Login({ login, passwod }) {
    
    const [loginState, setLoginState] = useState(LoginState.None);
    const [statusMessage, setStatusMessage] = useState('');

    const [userData, setUserData] = useState({
        login: login ?? "",
        passwod: passwod ?? "123456"
    });

    const [userPassword, setPassowrd] = useState('');
    const [userLogin, setLogin] = useState('');

    const getStatusStyle = () => {
        return {
            display: loginState === LoginState.None ? "none" : "block",
            marginTop: "1rem",
            padding: "0.5rem",
            textAlign: "center",
            borderRadius: "4px",
            fontWeight: "bold",
            backgroundColor: loginState === LoginState.Successful ? "#d4edda" : "#f8d7da",
            color: loginState === LoginState.Successful ? "#155724" : "#721c24",
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (userLogin !== userData.login)
        {
            setLoginState(LoginState.WrongLogin);
            setStatusMessage("Wrong login");

        }
        else if (userPassword !== userData.passwod)
        {
            setLoginState(LoginState.WrongPassword)
            setStatusMessage("Wrong password");
        }
        else 
        {
            setLoginState(LoginState.Successful);
            setStatusMessage("Successful");
        }
    }


    return <>
        <form class="login-form" onSubmit={onSubmit}>
            <h2>Login</h2>
            <input type="text" placeholder="Login" required onChange={(e) => setLogin(e.target.value)} value={userLogin} minLength={2}/>
            <input type="password" placeholder="Password" required onChange={(e) => setPassowrd(e.target.value)} value={userPassword} minLength={6}/>

            <button type="submit">Sign In</button>
            
            <div style={getStatusStyle()}> { statusMessage } </div>
        </form>
    </>


}

export default Login;
