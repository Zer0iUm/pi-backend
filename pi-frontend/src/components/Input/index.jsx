import React from "react";

const Input = ({ id, type = 'text', placeholder, label }) => {
return (
    <>
    <label htmlFor={id} className="form-label"
    >
        {label}
    </label>
    <input
    id={id}
    className="form-input"
    type={type}
    placeholder={placeholder}
    {...rest}
    />
    </>
)
}