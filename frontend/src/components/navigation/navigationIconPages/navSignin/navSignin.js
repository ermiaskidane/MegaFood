import React, {useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { useHistory } from "react-router-dom";
// https://www.pluralsight.com/guides/using-react-with-the-history-api
import "./navSignin.scss";
import Message from '../../../Message'
import Loader from '../../../Loader'
import { NavLink } from "react-router-dom";
import { login } from '../../../../store/actions/userActions'

import Sprite from "../../../../assets/images/sprite.svg";

const NavSignin = (props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()
  const history = useHistory();

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo }  = userLogin

  // const redirect = location.search ? location.search.split("=")[1]: "/"
  const redirect =  "/"


  useEffect(() => {
    if(userInfo) {
      history.push(redirect)
    }
  },[history, userInfo, redirect])

  const submitHandler =(e) =>{
    e.preventDefault()
    console.log("user Login")
    dispatch(login(email, password))
  }
  return (
    <> 
    {
      userInfo ? (
        null
      ) : (
        <div className="navSignup">
      <div className="navSignup__detail">
        <h1>MegaFood</h1>
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
        <h3>Great to have you back!</h3>
        <form  onSubmit={submitHandler}>
          <div className="navSignup__form">
            <input 
            type="email" 
            placeholder="Enter Email" 
            name="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            />
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
            <NavLink to="#">Forget your password?</NavLink>
            <button type="submit" value="Login">
              Log In
            </button>
          </div>
        </form>

        <div className="navSignup__registerNow">
          <span>Don't have an account?</span>
          <a  onClick={props.signup}>
            Register Now
            <svg>
              <use xlinkHref={`${Sprite}#icon-arrow-right2`} />
            </svg>
          </a>
        </div>
      </div>
    </div>
      )
    }
    </>
  );
};

export default NavSignin;
