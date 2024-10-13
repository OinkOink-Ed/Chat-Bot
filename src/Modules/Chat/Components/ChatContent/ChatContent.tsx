import { KeyboardEvent, MouseEvent, useEffect, useState } from "react";
import { pul } from "../../types";
import { autoResizingTextArea } from "../../../../Helpers/autoResizingTextArea";
import { autoScrollChat } from "../../../../Helpers/autoScrollChat";
import UserMessage from "../Messages/UserMessage";
import BotMessage from "../Messages/BotMessage";
import ChatTextArea from "../ChatTextArea/ChatTextArea";
import { initializationData } from "./initializationData";

interface ChatContentProps {

}

export default function ChatContent(props: ChatContentProps) {
    const [messagePul, setMessagePul] = useState<Array<pul>>([{ item: <UserMessage key={new Date().getTime().toString()} data={"Привет, Бот!"}></UserMessage> },
    { item: <BotMessage key={new Date().getTime().toString() + 1} data={"Привет, Бот!"}></BotMessage> }]);

    useEffect(() => {
        autoResizingTextArea();
        autoScrollChat();
    });

    function keyBoardHandler(event: KeyboardEvent) {
        if (event.key === "Enter") {
            initializationData(setMessagePul);
        }
    }

    function mouseClickHandler(event: MouseEvent) {
        event.preventDefault();

        initializationData(setMessagePul);
    }

    return (
        <>
            <div className="chat-content">
                {messagePul.map(item => { return item.item })}
            </div>
            <ChatTextArea mouseHandler={mouseClickHandler} keyHandler={keyBoardHandler}></ChatTextArea>
        </>
    );
};