import { openai } from ".";

export async function request(data: String) {
    const completion = await openai.createChatCompletion({
        messages: [
            { role: "assistant", content: `${data}` },
        ],
        model: "gemini-pro",
    });
    const message = (await completion.json()).choices[0].message
        .content as string;

    return message;
}