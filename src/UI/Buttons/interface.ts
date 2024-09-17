import { PropsWithChildren, ReactElement, SyntheticEvent } from "react";

type size = "small" | "md";
type variant = "primary" | "primary-outline" | "secondary" | "critic";

export interface ButtonProps extends PropsWithChildren {
    size: size,
    variant: variant,
    onClick?: (event: SyntheticEvent) => void,
    type?: "button" | "submit" | "reset" | undefined,
    disabled?: boolean,
}

export interface ButtonPropsWithIcon extends ButtonProps {
    icon: ReactElement,
}