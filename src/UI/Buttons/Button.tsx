import { ButtonProps } from "./interface";

export function Button({ children, size, ...props }: ButtonProps) {
    return (
        <button className="btn" data-size={size} {...props}>{children}</button>
    )
}