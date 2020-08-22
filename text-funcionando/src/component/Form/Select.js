import React, {useEffect, useRef} from 'react'

import { useField } from '@unform/core'
import { Redirect } from 'react-router-dom';

function Select({name, ...rest}){
    const inputRef = useRef(null);
    const { fieldName, registerField, defaultValue, error}= useField(name);
    useEffect(()=>{
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        })
    },[fieldName, registerField]);
    return(
        <div>
            <select ref={ inputRef} {...rest}   />
            {error && <samp style={{color:"#f00"}}>{error}</samp>}
        </div>
        
    );
}
export default Select