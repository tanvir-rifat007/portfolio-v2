"use client";

import { queryPdf } from "@/rag/query";
import React, { useState } from "react";

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userInput = e.target[0].value;
    setInput(userInput);
    e.target[0].value = "";

    // Add user message to chat history
    setChatHistory((prev) => [...prev, { type: "user", message: userInput }]);

    // Fetch the response from the AI
    const res = await queryPdf(userInput);

    // Add AI response to chat history
    setChatHistory((prev) => [...prev, { type: "ai", message: res }]);
  };

  return (
    <div className="relative">
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="z-20 text-white flex flex-col shrink-0 grow-0 justify-around 
                  fixed bottom-0 right-5 rounded-lg
                  mr-1 mb-5 lg:mr-5 lg:mb-5 xl:mr-10 xl:mb-10"
      >
        <div className="p-3 rounded-full border-4 dark:border-[#dea] bg-background border-[#283b65]">
          <svg
            className="w-10 h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </button>

      {/* Chat Box */}
      <div
        className={`fixed bottom-20 right-5 w-80 h-96 bg-background border border-gray-300 rounded-lg shadow-lg
                    transition-transform duration-300 ease-in-out 
                    ${
                      isOpen
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0 pointer-events-none"
                    }`}
      >
        {/* Chat Header */}
        <div className="bg-background text-white p-3 rounded-t-lg flex justify-between items-center">
          <span>Chat</span>
          <button onClick={() => setIsOpen(false)} className="text-white">
            ✖
          </button>
        </div>

        {/* Chat Body */}
        <div className="p-3 h-64 overflow-y-auto space-y-2">
          {/* Render chat history */}
          {chatHistory.map((chat, index) => (
            <div
              key={index}
              className={`p-2 rounded-md ${
                chat.type === "user"
                  ? "bg-gray-200 text-black"
                  : "bg-blue-500 text-white"
              }`}
            >
              <strong>{chat.type === "user" ? "You" : "AI"}:</strong>{" "}
              {chat.message}
            </div>
          ))}

          {!input && !chatHistory.length && (
            <p className="text-gray-600">Type a message...</p>
          )}
        </div>

        {/* Chat Input */}
        <div className="p-2 border-t bg-none text-green-200">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="w-full p-2 border outline rounded-md text-black"
              placeholder="Type a message..."
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
