export function bodyEvent(event: MouseEvent) {
    const element_1 = document.querySelector(".drop")!;
    const element_2 = document.querySelector(".drop-down")!;

    const check_1 = event.composedPath().includes(element_1);
    const check_2 = event.composedPath().includes(element_2);

    if (!check_1 && !check_2) {
        element_2.removeAttribute("data-show");
        element_1.removeAttribute("data-show");
    }
}