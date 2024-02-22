import React, { useEffect, useState } from 'react';

const Hooksdemo2 = () => {
    const [count,setcount] = useState(0)
    const increment =() =>
    {
        setcount(count +1)
    }
    useEffect(() => {
        document.title =`Count : ${count}`
        return () => {
            document.title = "REACT APP"
        };
    }, [count]);

    return (
        <div>
            <h3>Count = {count}</h3>
            <button onClick={increment}> Incremeent</button>
        </div>
    );
}


export default Hooksdemo2;
