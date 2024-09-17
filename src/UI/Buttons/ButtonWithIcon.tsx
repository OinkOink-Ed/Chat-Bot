import { ButtonPropsWithIcon } from "./interface";

export function ButtonWithIcon({ size, icon, ...props }: ButtonPropsWithIcon) {
    return (
        <button className="btn" data-type="icon" data-size={size} {...props}>{icon}</button>
    )
}