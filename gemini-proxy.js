// No arquivo .netlify/functions/gemini-proxy.js
const { GoogleGenerativeAI } = require("@google/generative-ai");

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { userPrompt } = JSON.parse(event.body);
  const API_KEY = process.env.GEMINI_API_KEY; // Sua chave da API, armazenada como variável de ambiente

  if (!API_KEY) {
    return { statusCode: 500, body: 'API Key not configured.' };
  }

  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  try {
    const prompt = `Crie um código HTML/CSS/JS (apenas o código completo, sem explicações ou textos extras) para: ${userPrompt}. Se for algo de interface, inclua CSS.`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ generatedCode: text }),
    };
  } catch (error) {
    console.error('Error generating content:', error);
    return { statusCode: 500, body: JSON.stringify({ error: 'Failed to generate content.' }) };
  }
};
