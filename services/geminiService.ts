import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

// Initialize the API client
const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const sendMessageToGemini = async (
  message: string,
  history: { role: 'user' | 'model'; parts: { text: string }[] }[]
): Promise<string> => {
  if (!apiKey) {
    return "Error: API Key is missing. Please configure the environment.";
  }

  try {
    const model = 'gemini-3-flash-preview';

    // We can use a chat session for history, but for simplicity in this stateless service wrapper
    // we will construct the prompt or use the chat helper with history passed in if needed.
    // Here we will use the simple generateContent but map the history to the chat format strictly.
    
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history
    });

    const response: GenerateContentResponse = await chat.sendMessage({
      message: message
    });

    return response.text || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting right now. Please try again later.";
  }
};