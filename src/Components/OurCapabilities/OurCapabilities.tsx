import { Typography } from "../../UI/Typography/Typography";
import { OurCapabilitiesProps } from "./interface";

export default function OurCapabilities(props: OurCapabilitiesProps) {

    return (
        <div className="our-capabilities">
            <h2 className="h2">Возможности ChatGPT</h2>
            <div className="card-conteiner">
                <div className="card">
                    <Typography size="xl-semibold">Создание увлекательного контента</Typography>
                    <Typography size="m-regular">
                        Вы когда-нибудь мечтали написать интересную книгу или статью, но не знали, с чего начать?
                        ChatGPT отлично справляется с генерацией текстов на любые темы. Опишите ему свою идею - и он создаст увлекательный контент, который захватит внимание читателей.
                    </Typography>
                </div>
                <div className="card">
                    <Typography size="xl-semibold">Решение сложных задач</Typography>
                    <Typography size="m-regular">
                        Задачи по математике или программированию иногда кажутся неразрешимыми головоломками.
                        Но не для ChatGPT! Он проанализирует проблему и предложит пошаговое решение. Вы быстро разберетесь в сложных концепциях благодаря его доступным объяснениям.
                    </Typography>
                </div>
                <div className="card">
                    <Typography size="xl-semibold">Разработка и отладка кода</Typography>
                    <Typography size="m-regular">
                        ChatGPT может помочь в написании и исправлении кода. Он проанализирует ваш код, найдет ошибки и предложит способы их исправления.
                        Также ChatGPT способен самостоятельно писать код по вашим указаниям - к примеру, для создания веб-сайта или приложения.
                    </Typography>
                </div>
                <div className="card">
                    <Typography size="xl-semibold">Перевод текстов между языками</Typography>
                    <Typography size="m-regular">
                        ChatGPT отлично справляется с переводом текстов на десятки языков.
                        Теперь вам не нужно тратить время на поиск переводчика - просто попросите ChatGPT, и он мгновенно переведет любой текст на нужный вам язык.
                    </Typography>
                </div>
                <div className="card">
                    <Typography size="xl-semibold">Помощь в написании резюме</Typography>
                    <Typography size="m-regular">
                        Вы ищете новую работу и нуждаетесь в резюме, которое произведет впечатление на работодателя?
                        ChatGPT поможет создать резюме, идеально подходящее под ваши навыки и опыт. Опишите ему желаемую вакансию - и получите готовое резюме в нужном формате.
                    </Typography>
                </div>
                <div className="card">
                    <Typography size="xl-semibold">Виртуальный помощник в жизни</Typography>
                    <Typography size="m-regular">
                        Не знаете, как приготовить новое блюдо или спланировать отпуск? Просто спросите ChatGPT!
                        Он выступит в качестве виртуального помощника в повседневных задачах, предоставив полезную информацию и рекомендации в любой сфере жизни.
                    </Typography>
                </div>
            </div>

        </div>
    );
};