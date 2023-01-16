import React from 'react';
import FormControlsStyles from './FormControls.module.css';

export const Input = ({input, meta, ...props}) => {
    return (
        <div className={FormControlsStyles.inputContainer}>
            <input {...input}{...props}
                   className={(meta.error && meta.touched) ? FormControlsStyles.error : undefined}/>
            {meta.error && meta.touched && <p>{meta.error}*</p>}
        </div>
    );
}

