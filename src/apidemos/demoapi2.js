// fetch api
import React, { useState,useEffect } from 'react';

const Demoapi2 = () => {
    const [data,setData] = useState(null)
    const [err,setError] = useState(null)
    const fetchdata = () =>
    {
        fetch("https://jsonplaceholder.typicode.com/users").
  then((responce) => {
    return responce.json()
  }).then((result) => {
    setData(result)
  }).catch((err) => {
    setError(err)
  });
}
  
useEffect(() => {
    fetchdata()
   }, [])
  
  return (
      <div>
        <h3> Fetch API Demo using JSON Placeholder API</h3>
        {
          (data!=null) ?
          <div >
            {
              data.map ( (user) =>
              (
                <div key={user.id}>
                  <h3> User : {user.id}</h3>
                  <p>{user.name}</p>
                  <p>{user.email}</p>
                  <p>{user.address.street}</p>
                </div>
              )
  
              )
            }
          </div>:
  
          <p>Error</p>
        }
      </div>
    )
  }
export default Demoapi2;
