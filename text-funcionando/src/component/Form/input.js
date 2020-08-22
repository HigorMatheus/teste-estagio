import React, {useEffect, useRef} from 'react'
import { useField } from '@unform/core'

function Input({ name, ...rest }){
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
            <input ref={ inputRef} defaultValue={defaultValue} {...rest}   />
            {error && <samp style={{color:"red"}}>{error}</samp>}
        </div>
        
    );
}

export default Input