import React from 'react'

export const User = ({name, gender, picture}) => {    
    return (
        <div>
            <h1>{name}</h1>
            <h1>{gender}</h1>
            <img src={picture} />           
        </div>
    )
}

export default User;
