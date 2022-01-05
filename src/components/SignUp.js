import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import './style.css';

function SignUp(props) {

    const [userData, setuserData] = useState({
        email:'',
        firstName:'',
        lastName:'',
        password:''
})

let navigateToLogin=()=>{
    // console.log(props);
    props.history.push('/login')
   }
//validation 
const[emailError,setemailError]=useState("")
const validateEmail=()=>{
    if(userData.email){
        let regex = /^\S+@\S+$/;
        if(regex.test(userData.email)){
            setemailError("");
            return true;
        }else{
            setemailError("enter valid email-id");
        }
        }else{
            setemailError("email-id is required");
        }
    return false
};
const [firstnameError, setfirstnameError] = useState("")
const validateFirstName=()=>{
    if(userData.firstName){
        let regex =/^[a-zA-Z ]{3,15}$/;
        if(regex.test(userData.firstName)){
            setfirstnameError("");
            return true;
        }
        else{
            setfirstnameError("enter valid first name");
        }}
        else{
            setfirstnameError(" first name is required");
        }
        return false; 
};

const [lastnameError, setlastnameError] = useState("")
const validateSecondtName=()=>{
    if(userData.lastName){
        let regex =/^[a-zA-Z ]{1,10}$/;
        if(regex.test(userData.lastName)){
            setlastnameError("");
            return true;
        }
        else{
            setlastnameError("enter valid last name");
        }}
        else{
            setlastnameError("last name is required");
        }
        return false; 
};

const [passwordError, setpasswordError] = useState("")
const validatePassword=()=>{
    if(userData.password){
        let regex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,15}$/;
        if(regex.test(userData.password)){
            setpasswordError("");
            return true;
        }
        else{
            setpasswordError("enter valid password");
        }}
        else{
            setpasswordError("password is required");
        }
        return false; 
};

//console.log(userData);
let updateUserData=(event)=>{
    setuserData({
        ...userData,
        [event.target.name]:event.target.value
    })
}

let saveData=()=>{

    //do all validationonce vald send data to app
     validateEmail();
     validateFirstName();
     validateSecondtName();
     validatePassword();
     if(validateEmail()&&validateFirstName()&&validateSecondtName()&&validatePassword()) {
     props.getUserData(userData)
     //clearing the form
     setuserData({
         email:'',
         firstName:'',
         lastName:'',
         password:''
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
                    onChange={(event)=>{updateUserData(event)}}
                    />
                    {emailError && <div className="errorMsg">{emailError} </div>}
                    </div>
                <div className="mb-3">
                    <input
                    name="firstName"
                    type="text"
                    className="form-control"
                    placeholder="Enter Firstname"
                    value={userData.firstName}
                    onChange={(event)=>{updateUserData(event)}}
                    />
                    {firstnameError&&<div className="errorMsg">{firstnameError}</div>}
                
                </div>
                <div className="mb-3">
                    <input
                    name="lastName"
                    type="text"
                    className="form-control"
                    placeholder="Enter Lastname"
                    value={userData.lastName}
                    onChange={(event)=>{updateUserData(event)}}
                    />
                    {lastnameError&&<div className="errorMsg">{lastnameError}</div>}
                
                </div>
                <div className="mb-3">
                    <input
                    name="password"
                    type="password"
                    className="form-control"
                    placeholder="Enter Password"
                    value={userData.password}
                    onChange={(event)=>{updateUserData(event)}}
                    />
                    {passwordError&&<div className="errorMsg">{passwordError}</div>}
                
                </div>
                <button type="submit" className="btn btn-primary" onClick={saveData}>SignUp</button>
                <h5 style={{cursor:'pointer'}} onClick={navigateToLogin}>Already have an account? Login here !</h5>
            {/* </form> */}
            
        </div>
    );
}

export default withRouter(SignUp) 
