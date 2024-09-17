import { Button } from "../../UI/Buttons/Button";
import { Typography } from "../../UI/Typography/Typography";
import { MidjourneyDescriptionProps } from "./interface";

export default function MidjourneyDescription(props: MidjourneyDescriptionProps) {

    return (
        <div className="midjourney-description">
            <div className="pictures">
                <img src="/icons/img.png" alt="" />
                <img src="/icons/img-2.png" alt="" />
                <img src="/icons/img-3.png" alt="" />
            </div>
            <div className="description-conteiner">
                <h2 className="h2">Генерация Изображений Через Midjourney </h2>
                <Typography size="m-regular">
                    MidJourney - инструмент для создания уникальных изображений.
                    Наши алгоритмы помогут вам воплотить в жизнь вашу идею. Начните генерировать изображения с MidJourney прямо сейчас!
                    Кликните на кнопку ниже, чтобы начать творить.
                </Typography>
                <Button size="small" variant="primary">Попробовать Midjourney</Button>
            </div>
        </div>
    );
};