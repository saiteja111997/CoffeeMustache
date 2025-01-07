"use client"; // Add this at the top of the file

import { useState } from "react";

const faqs = [
  { question: "How does the cafe recommendation engine work?", answer: "Our recommendation engine allows you to search for cafes using either text or voice prompts. You can specify your preferences like 'work-friendly,' 'pet-friendly,' or even search for cafes that serve specific items, such as 'best coffee with free Wi-Fi.' The engine will then show you cafes that match your exact needs." },
  { question: "How does the waitlist feature work in the app?", answer: "With our waitlist feature, you can view real-time wait times at participating cafes. Simply open the app, find your preferred cafe, and see the current waitlist status. You can even add yourself to the list remotely, so you don’t have to wait in line once you arrive!" },
  { question: "What is the dynamic menu and how does it help me?", answer: "Our dynamic menu feature categorizes the menu based on your preferences. You can search for items using text or voice commands, such as “cold coffee under 300 rupees” or “vegan options.” The app will instantly filter the menu and show you relevant options based on your query, helping you make decisions quickly and easily." },
  { question: "How do collaborative carts work for groups?", answer: "Yes! With our collaborative cart feature, you and your friends can start building your order before arriving at the cafe. Simply create a cart, share the link with others, and they can add their items. Once you arrive, the entire group can finalize the order together, ensuring a smooth, quick process." },
];

export default function FAQ() {
  return (
    <div className="py-16 bg-offwhite text-center">
      <h2 className="text-3xl font-bold text-brown mb-8">FAQ</h2>
      <div className="max-w-xl mx-auto">
        {faqs.map((faq, index) => (
          <FAQItem key={index} faq={faq} />
        ))}
      </div>
    </div>
  );
}

function FAQItem({ faq }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="cursor-pointer p-4 mb-2 bg-beige rounded shadow"
    >
      <div className="flex justify-between items-center text-brown">
        <span>{faq.question}</span>
        <span>{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && <p className="mt-4 text-gray-700">{faq.answer}</p>}
    </div>
  );
}
