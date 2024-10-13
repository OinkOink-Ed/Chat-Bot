import { ButtonPropsWithIcon } from "./interface";

export function ButtonWithIcon({ size, icon, handler, ...props }: ButtonPropsWithIcon) {
    return (
        <button onClick={handler} className="btn" data-type="icon" data-size={size} {...props}>{icon}</button>
    )
}