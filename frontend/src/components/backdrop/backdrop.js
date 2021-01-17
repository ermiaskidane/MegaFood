import React from "react";
import {useDispatch, useSelector} from "react-redux";
import "./backdrop.scss";

const Backdrop = props => {
  
  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo }  = userLogin

  return ( 
    <React.Fragment>
    {/* {userInfo ? (
      null
    ): ( */}
      <div className="backdrop" onClick={props.open}></div>
   {/* )}  */}
    </React.Fragment>
  ) ;
};
 
export default Backdrop;
