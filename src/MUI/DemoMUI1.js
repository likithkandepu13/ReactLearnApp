import React from 'react';
import { useState } from 'react';

const DemoMUI1 = () => {
    const [pname,setName] = useState("")
    const [productlist,setProductList] = useState([])
    const handleinput = (event) =>
    {
        setName(event.target.value)
    }
    const addProducts = () =>
    {
        if(pname.length>0)
        {
            setProductList([...productlist,pname])
             setName("")
        }
        else{
            alert("Enter proper name")
        }
    }
    return (
        <div>
            <input value={pname} onChange={handleinput} />
            <button onClick={addProducts}>Add Product</button>
            {
                productlist.map( (item,index) => (
                    <h3>{item}</h3>
                )

                )
            }
        </div>
    );
}

export default DemoMUI1;
