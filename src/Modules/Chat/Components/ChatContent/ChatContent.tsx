import { SyntheticEvent, useEffect, useState } from "react";
import { pul } from "../../types";
import { autoResizingTextArea } from "../../../../Helpers/autoResizingTextArea";
import { autoScrollChat } from "../../../../Helpers/autoScrollChat";
import UserMessage from "../Messages/UserMessage";
import BotMessage from "../Messages/BotMessage";
import ChatTextArea from "../ChatTextArea/ChatTextArea";

interface ChatContentProps {

}

export default function ChatContent(props: ChatContentProps) {
    const [messagePul, setMessagePul] = useState<Array<pul>>([{ item: <UserMessage key={new Date().getTime().toString()} data={"Привет, Бот!"}></UserMessage> },
    { item: <BotMessage key={new Date().getTime().toString() + 1} data={"Привет, Бот!"}></BotMessage> }]);

    useEffect(() => {
        autoResizingTextArea();
        autoScrollChat();
    });

    async function initializationData(event: SyntheticEvent) {
        event.preventDefault();

        const form = document.querySelector<HTMLFormElement>("#message")!;

        const formData = new FormData(form);

        const userData = formData.get("text")!.toString();

        const textArea: HTMLInputElement = document.querySelector("#gemini")!;
        textArea.value = "";

        setMessagePul((messagePul) => [...messagePul, {
            item: <UserMessage key={new Date().getTime().toString()} data={userData}></UserMessage>
        }]);

        setMessagePul((messagePul) => [...messagePul, {
            item: <BotMessage key={new Date().getTime().toString() + 1} data={userData}></BotMessage>
        }]);
    };

    return (
        <>
            <div className="chat-content">
                {messagePul.map(item => { return item.item })}
            </div>
            <ChatTextArea handler={initializationData}></ChatTextArea>
        </>
    );
};