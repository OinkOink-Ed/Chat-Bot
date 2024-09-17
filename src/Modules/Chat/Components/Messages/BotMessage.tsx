import { useEffect, useState } from "react";
import { request } from "../../../../API/request";
import { Typography } from "../../../../UI/Typography/Typography"

interface BotMessageProps {
    data: String,
}

export default function BotMessage({ data }: BotMessageProps) {
    const [answer, SetAnswer] = useState<String>();

    useEffect(() => {
        (async function getAnswer() {
            const result = await request(data);
            SetAnswer(result);
        })();
    }, []);

    return (
        <div className="bot-message">
            <Typography size="m-regular">Gemini</Typography>
            <div className="bot-message-conteiner">
                <img src="/icons/gemini.png" alt="" />
                <div className="message">{answer ? answer : "Ответ генерируется"}</div>
            </div>
        </div>
    );
};