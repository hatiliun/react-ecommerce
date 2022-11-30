import React from 'react';
import { DotSpinner } from '@uiball/loaders'
import "./loader.css";


function Loader(props) {
 return (
    
    <DotSpinner classname="dot-spinner" 
    {...props} 
    />
    );
}

export default Loader;