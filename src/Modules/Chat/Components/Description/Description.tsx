import { Button } from "../../../../UI/Buttons/Button";
import { Typography } from "../../../../UI/Typography/Typography";
import { DescriptionProps } from "./interface";

export default function Description(props: DescriptionProps) {

    return (
        <div className="chat-description">
            <h1 className="h1">ChatGPT: ваш умный помощник</h1>
            <Typography size="m-medium">Экспериментируйте с ChatGPT-4, Midjourney и Claude в одном месте.
                Без VPN и абонентской платы. Создавайте контент, обрабатывайте данные и получайте ответы на вопросы через удобный интерфейс!
            </Typography>
            <div>
                <Button size="md" variant="primary">Начать работу</Button>
            </div>
        </div>
    );
};