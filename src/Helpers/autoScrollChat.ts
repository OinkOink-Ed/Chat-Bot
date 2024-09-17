export function autoScrollChat() {
    let element = document.querySelector(".chat-content")!;
    element.scrollTop = element.scrollHeight;
}