import React, { useState } from 'react';
import student from './data.json'
import { useEffect } from 'react';

const Demoapi1 = () => {
    const [data,setData] = useState([])
    useEffect(() => {
        
        return () => {
            setData(student)
        };
    }, []);
    return (
        <div>
            <h3> Student Data</h3>
            <h3>id : {data.id}</h3>
            <h3>Name : {data.name}</h3>

            
        </div>
    );
}

export default Demoapi1;
