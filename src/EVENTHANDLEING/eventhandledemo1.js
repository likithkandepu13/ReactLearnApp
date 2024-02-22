import React, { useState } from 'react';
const Eventhandledemo1 = () => {
    const [name,setName] = useState("")
    const display = (event) =>
    {
        setName(event.target.value)
    }
    return (
        <div>
            Enter name : <input type="text" value={name} onChange={display}  />
            <h3>{name}</h3>
        </div>
    );
}
export default Eventhandledemo1;
