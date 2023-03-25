import { forwardRef } from 'react';

export const TextInputField = forwardRef(({ label, errorMessage }, ref) => {
    return <div>
        <label>{label}</label>
        <input type={"text"} ref={ref} />
        {errorMessage && <span>{errorMessage}</span>}
    </div>
})

export const DateInputField = forwardRef(({ label, errorMessage }, ref) => {
    return <div>
        <label>{label}</label>
        <input type={"date"} ref={ref} />
        {errorMessage && <span>{errorMessage}</span>}
    </div>
})

export const TextAreaInputField = forwardRef(({label, errorMessage }, ref) => {
    return <div>
    <label>{label}</label>
    <textarea cols="30" rows="10" ref={ref}></textarea>
    {errorMessage && <span>{errorMessage}</span>}
</div>
})