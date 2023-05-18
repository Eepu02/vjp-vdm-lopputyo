import { Configuration, OpenAIApi } from "openai";
import { config } from "dotenv";

config();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const getResponse = async (messages) => {
    // Some limitations so we don't go bankrupt during development (although it's still cheap, we're students)
    if (
        process.env.NODE_ENV === "production" &&
        process.env.OPENAI_API_KEY !== undefined
    ) {
        try {
            const completion = await openai.createChatCompletion({
                model: "gpt-3.5-turbo",
                messages: [
                    {
                        role: "system",
                        content:
                            "Olet avulias TunneGPT, joka auttaa ihmisiä tunne-elämän asioissa. Älä ota kantaa muihin aiheisiin. Pidä vastauksesi lyhyinä mutta informatiivisina.",
                    },
                    ...messages,
                ],
            });
            return {
                status: "ok",
                message: completion.data.choices[0].message,
            };
        } catch (e) {
            return {
                status: "error",
                message: e,
            };
        }
    } else {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    status: "ok",
                    message: {
                        role: "assistant",
                        content:
                            "Hello from Server! Please set NODE_ENV to production and/or provide an API key!",
                    },
                });
            }, 1000);
        });
    }
};

export default getResponse;
