import React from 'react';
import {useNavigate} from "react-router-dom";

const Support = () => {
    const navigate=useNavigate();
    function backHandler(){
        navigate(-1);
    }
    function clickHandler(){
        navigate("/labs");

    }
  return (
    <div>
        <div>
      this is dsupport page
    </div>
    <button onClick={clickHandler}>Move to lab page</button>
    <button onClick={backHandler}></button>
    </div>
    
  )
}

export default Support
