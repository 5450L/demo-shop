import React from 'react';
import FormControlsStyles from './FormControls.module.css';

export const Input = ({input, meta, ...props}) => {
    return (
        <div className={FormControlsStyles.inputContainer}>
            <input {...input}{...props}
                   className={(meta.error && meta.touched) ? FormControlsStyles.error : undefined}/>
            {input.name === 'rememberMe' ? <label>remember me</label> : undefined}
            {meta.error && meta.touched && <p className={FormControlsStyles.errorMessage}>{meta.error}*</p>}
        </div>
    );
}

