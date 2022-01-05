
import { withRouter } from 'react-router-dom';
import React, { useState } from 'react'

function Login(props) {

    const [userData, setuserData] = useState({
        email: '',
        password: ''
    })


    let navigateToSignup = () => {
        // console.log(props);
        props.history.push('/signup');
    };

    //validation 
    const [emailError, setemailError] = useState("")
    const validateEmail = () => {
        if (userData.email) {
            let regex = /^\S+@\S+$/;
            if (regex.test(userData.email)) {
                setemailError("");
                return true;
            } else {
                setemailError("enter valid email-id");
            }
        } else {
            setemailError("email-id is required");
        }
        return false
    };

    const [passwordError, setpasswordError] = useState("")
    const validatePassword = () => {
        if (userData.password) {
            let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,15}$/;
            if (regex.test(userData.password)) {
                setpasswordError("");
                return true;
            }
            else {
                setpasswordError("enter valid password");
            }
        }
        else {
            setpasswordError("password is required");
        }
        return false;
    };

    let updateUserData = (event) => {
        setuserData({
            ...userData,
            [event.target.name]: event.target.value
        })
    }

    let saveData = () => {

        //do all validationonce vald send data to app
        validateEmail();
        validatePassword();

        if (validateEmail() && validatePassword()) {
            props.getUserData(userData)
            //clearing the form
            setuserData({
                email: '',
                password: '',

            })
        }
    }
    return (

        <div className="container">

            {/* <form> */}
            <div className="mb-3">
                <input
                    name="email"
                    type="text"
                    className="form-control"
                    placeholder="Enter Email"
                    value={userData.email}
                    onChange={(event) => { updateUserData(event) }}
                />
                {emailError && <div className="errorMsg">{emailError} </div>}
            </div>
            <div className="mb-3">
                <input
                    name="password"
                    type="password"
                    className="form-control"
                    placeholder="Enter Password"
                    value={userData.password}
                    onChange={(event) => { updateUserData(event) }}
                />
                {passwordError && <div className="errorMsg">{passwordError}</div>}

            </div>
            <button type="submit" class="btn btn-primary">Login</button>


            <h5 style={{ cursor: 'pointer' }} onClick={navigateToSignup}>Don't have an account? Signup here !</h5>

        </div>
    )
}

export default withRouter(Login) 
