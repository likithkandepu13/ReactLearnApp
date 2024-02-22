import React from 'react';

const Testfunction1 = (props) => {
    return (
        <div>
            
            <h3>{props.students.id}</h3>
            <h3> {props.students.name}</h3>
            <ol>
                 {
                props.products.map( (p,ind) =>
                (
                    
                    <li key={ind}>{p}</li>
                    
                )

                )
                }
                </ol>

            
        </div>
    );
}

export default Testfunction1;
