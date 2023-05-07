import { Configuration, OpenAIApi } from "openai";
import { config } from "dotenv";

config();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const getResponse = async (messages) => {
    // try {
    //     const completion = await openai.createChatCompletion({
    //         model: "gpt-3.5-turbo",
    //         messages: [
    //             {
    //                 role: "system",
    //                 content:
    //                     "Olet avulias TunneGPT, joka auttaa ihmisiä tunne-elämän asioissa. Jos keskustelu koskee jotain muuta aihealuetta, vastaa 'Minulla ei ole tietoa tästä.'.",
    //             },
    //             ...messages,
    //         ],
    //     });
    //     return {
    //         status: "ok",
    //         message: completion.data.choices[0].message,
    //     };
    // } catch (e) {
    //     return {
    //         status: "error",
    //         message: e,
    //     };
    // }
    // console.log(completion.data.choices[0].message);
    return {
        status: "ok",
        message: {
            role: "assistant",
            content: "Hello from Server",
        },
    };
};

export default getResponse;
