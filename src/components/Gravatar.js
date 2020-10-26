import React from 'react';
import md5 from 'md5';

function Gravatar (props){
    const email = props.email;
    const hash = md5(email);
    // const hash = 'b398505bcf0cb093e4d203203c2654d5';

    return(
        <img className={props.className} src={`https://www.gravatar.com/avatar/${hash}?d=identicon`} alt="avatar"/>
    );

};

export default Gravatar;