import { KeyboardEvent, MouseEvent } from "react";
import { ButtonWithIcon } from "../../../../UI/Buttons/ButtonWithIcon";

interface ChatTextAreaProps {
    mouseHandler?: (event: MouseEvent) => void,
    keyHandler?: (event: KeyboardEvent) => void,
}

export default function ChatTextArea({ mouseHandler, keyHandler }: ChatTextAreaProps) {

    return (
        <div className="input-message">
            <form id="message" name="gemini">
                <textarea onKeyDown={keyHandler} className="text-area" name="text" id="gemini" placeholder="Cпроси о чем-нибудь..."></textarea>
                <ButtonWithIcon type="submit" handler={mouseHandler} size="small" variant="primary" icon={<img src="/icons/send.png"></img>}></ButtonWithIcon>
            </form>
        </div>
    )
};