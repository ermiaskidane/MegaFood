import React, {useState, useEffect }from "react";
import {useDispatch, useSelector} from "react-redux";
import { useHistory } from "react-router-dom";
// https://www.pluralsight.com/guides/using-react-with-the-history-api
import "../navSignin/navSignin.scss";
import Message from '../../../Message'
import Loader from '../../../Loader'
// import { NavLink } from "react-router-dom";
import { register } from '../../../../store/actions/userActions'
 
import Sprite from "../../../../assets/images/sprite.svg";

const NavSignup = (props) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()
  const history = useHistory();

  // use this to close the signup and login component after the 
  // user is login 
  // better option would be to find a way to get my state userInfo from redux to 
  // class App component  and using if condition utilize for the modal so that it 
  // could on/off the signin and login component
  const userLogin = useSelector((state) => state.userLogin)
  const {
     loading: loadingLogin,
     error: errorLogin,
     userInfo: userInfoLogin 
    }  = userLogin

  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error, userInfo } = userRegister
  
//   const redirect = location.search ? location.search.split('=')[1] : '/'
  const redirect =  "/shop"

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(register(name, email, password))
    }
  }

  return (
    <>
    {
      userInfoLogin ? (
        null
      ) : (
        <div className="navSignup">
      <div className="navSignup__detail">
        <h1>MegaFood</h1>
        {message && <Message variant='danger'>{message}</Message>}
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
        <h3>Welcome Great to have you!</h3>
        <form  onSubmit={submitHandler}>
          <div className="navSignup__form">
          <input 
            type="name" 
            placeholder="Enter Name" 
            name="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            />
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
            <input
              type="password"
              placeholder="Confirm password"
              name="confirmPassword"
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
            />
            <button type="submit" value="Login">
              Sign Up
            </button>
          </div>
        </form>

        <div className="navSignup__registerNow">
          <span>You have an account?</span>
          <a onClick={props.signin}>
            SignIn Now
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
  )
}

export default NavSignup