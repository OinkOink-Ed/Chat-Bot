import { PropsWithChildren } from "react";

type size = "xs-regular" | "s-regular" | "s-medium" | "m-regular" | "m-medium" | "m-semibold" | "l-medium-italic" | "l-medium" | "l-semobold" | "xl-semibold" | "xxl-semibold";

export interface TypographyProps extends PropsWithChildren {
    size: size,
}