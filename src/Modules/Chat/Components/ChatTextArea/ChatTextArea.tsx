import { SyntheticEvent } from "react";
import { ButtonWithIcon } from "../../../../UI/Buttons/ButtonWithIcon";

interface ChatTextAreaProps {
    handler: (event: SyntheticEvent) => {},
}

export default function ChatTextArea({ handler }: ChatTextAreaProps) {

    return (
        <div className="input-message">
            <form id="message" name="gemini">
                <textarea className="text-area" name="text" id="gemini" placeholder="Cпроси о чем-нибудь..."></textarea>
                <ButtonWithIcon type="submit" onClick={(event) => handler(event)} size="small" variant="primary" icon={<img src="/icons/send.png"></img>}></ButtonWithIcon>
            </form>
        </div>
    )
};