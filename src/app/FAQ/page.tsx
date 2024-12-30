"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "What is AI?",
    answer:
      " AI is the development of computer systems that can perform tasks requiring human intelligence, like learning, reasoning, and problem-solving.",
  },
  {
    question: "How is AI used daily?",
    answer:
      "AI powers virtual assistants, personalized recommendations, smart devices, and autonomous vehicles.",
  },
  {
    question: "What is Machine Learning?",
    answer:
      "Machine Learning is a subset of AI where systems learn from data to improve performance over time.",
  },
  {
    question: "What are AI's benefits?",
    answer:
      "AI enhances efficiency, automates repetitive tasks, improves decision-making, and personalizes user experiences.",
  },
  {
    question: "What are AI's challenges",
    answer:
      "AI faces issues like bias, ethical concerns, data dependency, and energy use.",
  },
  {
    question: "What is the future of AI?",
    answer:
      "AI is advancing toward greater autonomy, ethical use, and enhanced problem-solving.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-white rounded-2xl shadow-md my-10">
      <h2
        style={{
          fontFamily: "Lobster",
          fontWeight: 500,
        }}
        className="text-4xl font-bold text-center tracking-wide mb-8"
      >
        Frequently Asked Questions
      </h2>
      <div
        style={{
          fontFamily: "Saira",
          fontWeight: 500,
        }}
        className="space-y-4"
      >
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg">
            <button
              className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left
               text-myDarkestPr bg-purple-100 hover:bg-purple-200 focus:outline-none focus-visible:ring
                focus-visible:ring-purple-600 focus-visible:ring-opacity-75"
              onClick={() => toggleQuestion(index)}
            >
              <span>{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-myDarkestPr" />
              ) : (
                <ChevronDown className="w-5 h-5 text-myDarkestPr" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-4 pt-4 pb-2 text-sm text-purple-950">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
