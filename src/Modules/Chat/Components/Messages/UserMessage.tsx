interface UserMessageProps {
    data: String,
}

export default function UserMessage({ data }: UserMessageProps) {

    return (
        <div className="user-message">
            <div className="user-message-conteiner">
                <img src="/icons/gemini.png" alt="" />
                <div className="message">{data}</div>
            </div>
        </div>
    );
};