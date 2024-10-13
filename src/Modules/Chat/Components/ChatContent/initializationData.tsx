import { Dispatch } from "react";
import BotMessage from "../Messages/BotMessage";
import UserMessage from "../Messages/UserMessage";
import { pul } from "../../types";

export async function initializationData(setMessagePul: Dispatch<React.SetStateAction<pul[]>>) {

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