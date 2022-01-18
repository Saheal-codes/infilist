import "./CSS/form.css"

export interface Props {
    login: any;
  }

const LoginPage = (props:Props)=>{
    return (<div className="form"><h2> Please Enter Your Details </h2>
        <label>Username</label>
        <div> <input type="text"></input></div>
        <label>Password</label>
        <div><input type="password" ></input></div>
        <div><button onClick={props.login} value="Submit">Proceed</button></div></div>
    )}

    export default LoginPage


    
  