
import { GoogleGenAI } from "@google/genai";

// SEO Growth Audit service using the Google GenAI SDK.
export async function generateSEOStrategy(domain: string): Promise<string> {
  // Always initialize the client right before the request to ensure the latest environment state.
  // The API key is sourced directly from process.env.API_KEY as a named parameter.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    const response = await ai.models.generateContent({
      // Using gemini-3-pro-preview for complex reasoning tasks like a Wharton-level SEO audit.
      model: "gemini-3-pro-preview",
      contents: `Act as Zechariah Tokar, a senior SEO strategist with a Wharton MBA and 10 years experience. 
      Generate a professional 3-point preliminary SEO growth audit for the website: ${domain}. 
      Focus on ROI, high-intent keywords, and technical scalability. Keep the tone authoritative and strategic.`,
      config: {
        temperature: 0.6,
        topP: 0.9,
        // maxOutputTokens is set to provide a concise yet comprehensive summary.
        maxOutputTokens: 500,
      }
    });

    // Access the generated text using the .text property (not a method).
    return response.text || "Strategy generation unavailable. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The automated audit tool is currently busy. Please contact Zechariah directly for a manual review.";
  }
}
