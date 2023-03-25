import "./button.module.css";

export function ButtonField({children, onClick, type="button", disabled=false}) {
    return <button type={type} onClick={onClick} disabled={disabled}>{children}</button>
}