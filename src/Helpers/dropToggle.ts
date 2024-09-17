import { BaseSyntheticEvent } from "react";

export function dropToggle(event: BaseSyntheticEvent) {
    const element = document.querySelector(".drop-down")!;

    event.currentTarget.toggleAttribute("data-show");
    element.toggleAttribute("data-show");
}