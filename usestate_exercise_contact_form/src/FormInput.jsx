import { useState } from "react";

const FormInput = ({label, type, name, value, onChange}) =>
{
    return(
        <div>
            <label htmlFor={name}>{label}:</label>
            <input type={type} id={name} name={name} value={value} onChange={onChange} />
        </div>
    );
};

export default FormInput;
