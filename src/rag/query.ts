"use server";

import { Index as UpstashIndex } from "@upstash/vector";
import OpenAI from "openai";

const index = new UpstashIndex({
  url: process.env.UPSTASH_VECTOR_REST_URL,
  token: process.env.UPSTASH_VECTOR_REST_TOKEN,
});

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const queryPdf = async (query) => {
  try {
    // Retrieve multiple text chunks
    const results = await index.query({
      data: query,
      topK: 10, // Increase diversity of responses
      includeMetadata: true,
      includeData: true,
    });

    if (!results.length) {
      return "No relevant information found.";
    }

    const pdfText = results.map((r) => r.data).join("\n\n");

    console.log(pdfText);

    const prompt = `Extract the most relevant answer from the text below for the following query. Keep the response short, direct, and in plain text.\n\nQuery: "${query}"\n\nText:\n"${pdfText}"`;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant answering questions based on the user question",
        },

        { role: "user", content: prompt },
      ],
      temperature: 0.3,
    });

    console.log(response.choices[0].message.content!.trim());

    return response.choices[0].message.content!.trim();
  } catch (e) {
    console.error(e);
    return "An error occurred while processing your request.";
  }
};
