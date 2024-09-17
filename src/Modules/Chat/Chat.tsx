import MyInput from "../../UI/Input/MyInput";
import { Typography } from "../../UI/Typography/Typography";
import Description from "./Components/Description/Description";
import { ChatProps } from "./interface";
import ChatContent from "./Components/ChatContent/ChatContent";

export default function Chat(props: ChatProps) {
    return (
        <div className="chat-module-conteiner">
            <Description />
            <div className="chat">
                <div className="chat-header">
                    <div className="title">
                        <img src="/icons/Mask group.png" alt="" />
                        <div className="bot-name">
                            <Typography size="m-regular">BotHub: ChatGPT & Midjourney</Typography>
                            <Typography size="m-regular">bot</Typography>
                        </div>
                    </div>
                    <div className="context">
                        <Typography size="s-regular">Сохранить контекст</Typography>
                        <MyInput type="checkbox" />
                    </div>
                </div>
                <ChatContent></ChatContent>
            </div>
        </div>
    );
};