import React from 'react';

function Test(){
    return(
        <div>{sessionStorage.getItem("hello")}</div>
    )
}
export default Test;