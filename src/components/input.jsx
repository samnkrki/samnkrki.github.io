
export const TextInputField = ({ label, register, name, required = false }) => {
    return <div>
        <label>{label}</label>
        <input type={"text"} {...register(name, { required })} />
    </div>
}

export const DateInputField = ({ label, register, name, required = false, }) => {
    return <div>
        <label>{label}</label>
        <input type={"date"} {...register(name, { required })} />
    </div>
}

export const TextAreaInputField = ({ label, register, name, required = false }) => {
    return <div>
        <label>{label}</label>
        <textarea cols="30" rows="10" {...register(name, { required })}></textarea>
    </div>
}