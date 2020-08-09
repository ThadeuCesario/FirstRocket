import React from 'react';

const Header = props => {
    const {title, children} = props;

    console.log(props.children);
    return(
       <header>
           <h1>{title}</h1>
            {children}
       </header>
    );
}

export default Header;