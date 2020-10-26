import React from 'react';
import './styles/PageError.css';

function PageError(props){
    return(
        <div className="PageError">
            X{props.error.message} :O
        </div>
    )
}

export default PageError;