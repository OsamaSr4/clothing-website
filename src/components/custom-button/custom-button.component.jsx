import React from 'react';
import './custom-button.styles.scss';
//import { signInWithGoogle } from '../../Firebase/firebase.utils';

const CustomButton = ({ children,isGoogleSignIn, inverted, ...otherProps}) => (

    
        <button className={`${inverted ? ' inverted ':' '}custom-button`} 
        {...otherProps}  
         >
        {children}  
        </button>
        
        );

export default CustomButton;       
