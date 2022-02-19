

import React from "react";

function Header(){
    const headerStyle = {
        fontFamily: 'sans-serif',
        paddingTop: '30px',
        color:'brown'
      }
    return (
        <div style={headerStyle}>    
        <hr/>  
            <h1>Curd Applications</h1>
        </div>
    );
}

export default Header;