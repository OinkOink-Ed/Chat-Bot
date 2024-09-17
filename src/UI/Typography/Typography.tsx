import { TypographyProps } from "./interface";

export function Typography({ size, children }: TypographyProps) {

    return (
        <p className={size}>{children}</p>
    )
}