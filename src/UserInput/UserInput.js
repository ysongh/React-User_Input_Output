import React from 'react';

const userInput = (props) => {
    const inputstyle={
        border: '2px ridge blue'
    };
    // Dont put () on the function to prevent it to be excuted at the start of program
    return <input 
        type="text"
        style={inputstyle}
        onChange={props.changed}
        value={props.currentName} />;
};

export default userInput;