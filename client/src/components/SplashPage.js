import React from "react";

function SplashPage(){
    const headerStyle = {
        fontFamily: 'sans-serif',
        paddingTop: '30px',
        color:'brown'
      }
    return (
        <div style={headerStyle}>    
        <hr/>  
            <h1> Welcome to Curd Applications</h1>
        </div>
    );
}

export default SplashPage;