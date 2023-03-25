
import styles from  "./input.module.css";

export const TextInputField = ({ label, register, name, required = false }) => {
    return <div className={styles.fieldContainer}>
        <label>{label}</label>
        <input type={"text"} {...register(name, { required })} />
    </div>
}

export const DateInputField = ({ label, register, name, required = false, onChange }) => {
    return <div className={styles.fieldContainer}>
        <label>{label}</label>
        <input type={"date"} {...register ? register(name, { required }) : undefined} onChange={onChange} />
    </div>
}

export const TextAreaInputField = ({ label, register, name, required = false }) => {
    return <div className={styles.fieldContainer}>
        <label>{label}</label>
        <textarea cols="50" rows="1" {...register(name, { required })}></textarea>
    </div>
}