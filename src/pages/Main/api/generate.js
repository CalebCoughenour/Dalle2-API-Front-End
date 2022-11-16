const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

export async function apiCall (req, res) {
  const response = await openai.createImage({
    prompt: generatePrompt(req.body.input),
    n: 1,
    size: "512x512",
  });
  res.status(200).json({ result: response.data.data[0].url });
}

function generatePrompt(input) {
  const capitalizedInput =
    input[0].toUpperCase() + input.slice(1).toLowerCase();
  return `${capitalizedInput}`;
}