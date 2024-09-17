import { Typography } from "../../UI/Typography/Typography";
import { FooterProps } from "./interface";

export default function Footer(props: FooterProps) {

    return (
        <div className="footer">
            <div className="footer-conteiner">
                <div className="information">
                    <a href=""><img src="/icons/logo.png" alt="" /></a>
                    <Typography size="s-regular">ООО «Ботхаб» ОГРН 1236300016259</Typography>
                    <Typography size="s-regular">@BotHub 2023</Typography>
                    <Typography size="s-regular">Пользовательское соглашение</Typography>
                    <img src="/icons/Vector-1.png" alt="" />
                </div>
                <div className="about-conteiner">
                    <div>
                        <Typography size="m-semibold">Информация</Typography>
                        <a>
                            <Typography size="m-regular">Главная страница</Typography>
                        </a>
                        <a>
                            <Typography size="m-regular">Тарифы</Typography>
                        </a>
                        <a>
                            <Typography size="m-regular">Контакты</Typography>
                        </a>
                        <a>
                            <Typography size="m-regular">Наши возможности</Typography>
                        </a>
                        <a>
                            <Typography size="m-regular">Модели нейросетей</Typography>
                        </a>
                        <a>
                            <Typography size="m-regular">О Нас</Typography>
                        </a>
                        <a>
                            <Typography size="m-regular">Для инвесторов</Typography>
                        </a>
                    </div>
                    <div>
                        <Typography size="m-semibold">Наши продукты</Typography>
                        <a>
                            <Typography size="m-regular">ChatGPT для бизнеса</Typography>
                        </a>
                        <a>
                            <Typography size="m-regular">Агрегатор нейросетей</Typography>
                        </a>
                        <a>
                            <Typography size="m-regular">ChatGPT в Telegram</Typography>
                        </a>
                    </div>
                    <div>
                        <Typography size="m-semibold">Ссылки</Typography>
                        <a>
                            <img src="" alt="" />
                            <Typography size="m-regular">Сообщество в телеграм</Typography>
                        </a>
                        <a>
                            <img src="" alt="" />
                            <Typography size="m-regular">Телеграм бот</Typography>
                        </a>
                        <a>
                            <img src="" alt="" />
                            <Typography size="m-regular">email@bothub.chat</Typography>
                        </a>
                    </div>
                    <div>
                        <Typography size="m-semibold">Блог</Typography>
                        <a>
                            <img src="" alt="" />
                            <Typography size="m-regular">Наш блог</Typography>
                        </a>
                        <a>
                            <img src="" alt="" />
                            <Typography size="m-regular">Habr</Typography>
                        </a>
                        <a>
                            <img src="" alt="" />
                            <Typography size="m-regular">Телеграм</Typography>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};