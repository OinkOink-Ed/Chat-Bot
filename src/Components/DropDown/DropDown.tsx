import { Typography } from "../../UI/Typography/Typography";

export function DropDown() {
    return (
        <div className="drop-down">
            <div>
                <img src="/icons/bothub-agg.png" alt="" />
                <div>
                    <Typography size="m-semibold">Агрегатор нейросетей BotHub</Typography>
                    <Typography size="xs-regular">ChatGPT на базе 3.5 и 4.0 версии OpenAI</Typography>
                </div>
            </div>
            <div>
                <img src="/icons/business-colored.png" alt="" />
                <div>
                    <Typography size="m-semibold">Telegram бот</Typography>
                    <Typography size="xs-regular">ChatGPT для эффективного решения бизнес задач</Typography>
                </div>
            </div>
            <div>
                <img src="/icons/tg-colored.png" alt="" />
                <div>
                    <Typography size="m-semibold">Бизнес бот</Typography>
                    <Typography size="xs-regular">Удобный бот в Telegram который всегда под рукой</Typography>
                </div>
            </div>
        </div>
    )
}