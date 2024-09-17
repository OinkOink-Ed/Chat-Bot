export function autoResizingTextArea() {
    const textarea: HTMLElement | null = document.querySelector('.text-area');

    textarea?.addEventListener('input', () => {
        textarea.style.height = `0px`

        if (textarea.scrollHeight > textarea.offsetHeight) {
            textarea.style.height = `${textarea.scrollHeight}px`
        }
    })

    textarea?.addEventListener('focus', () => {
        textarea.style.height = `0px`

        if (textarea.scrollHeight > textarea.offsetHeight) {
            textarea.style.height = `${textarea.scrollHeight}px`
        }
    })

    textarea?.dispatchEvent(new InputEvent('input'));
}