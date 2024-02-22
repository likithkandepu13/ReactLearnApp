import React, { useState } from 'react';

const Conditionaldemo1 = () => {

    const [flag,setFlag]=useState(true)
    const change = () =>
    {
        setFlag(!flag)
    }
    return (
        <div>
            <h3>Conditional Rendering !</h3>
            {
                flag ?
                <div>
                    <button onClick={change}>Login </button>
                <h3 style={{color:"red"}}> Please Login</h3>
                </div>
                :
                <div>
                <button onClick={change}>Logout </button>
            <h3 style={{color:"green"}}> Thanks for Login</h3>
            </div>         }
           
        </div>
    );
}

export default Conditionaldemo1;
