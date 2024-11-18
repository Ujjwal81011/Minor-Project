import React, { useState } from "react";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Why is flight ticket booking the cheapest on ixigo?",
      answer: (
        <div>
          <p>
            ixigo directly searches multiple airline websites for the{" "}
            <strong>cheapest fares</strong>. Many airlines prefer to sell their
            cheapest flight tickets on ixigo. Additionally, with its{" "}
            <strong>exclusive offers and deals</strong>, including several bank
            and partner offers, ixigo serves as the best platform to book{" "}
            <strong>cheap flights</strong>.
          </p>
          <p className="mt-2">Some of the ongoing flight deals include:</p>
          <ul className="list-decimal ml-6 mt-2 text-gray-700">
            <li>Flat 10% Off up to Rs.1000 on flights with OneCard Credit Card.</li>
            <li>Flat Rs. 555 Off on Flight Bookings via MobiKwik wallet.</li>
            <li>Get up to Rs. 5000 Off on flights with HDFC bank EasyEMI on Credit Cards.</li>
          </ul>
          <p className="mt-2">
            Visit{" "}
            <a href="#" className="text-blue-500 hover:underline font-semibold">
              ixigo flight offers
            </a>{" "}
            for more.
          </p>
        </div>
      ),
    },
    {
      question: "How do I book cheap flight tickets?",
      answer: (
        <div>
          <p className="mt-2">
            Here's how you can book <strong>cheap flight tickets:</strong>
          </p>
          <ul className="list-disc ml-6 mt-2 text-gray-700">
            <li>Book your flights from ixigo in advance to get the cheapest deals.</li>
            <li>Be flexible, and consider flying during off-peak hours.</li>
            <li>
              Use ixigo's fare alerts to get notifications when ticket prices drop.
            </li>
            <li>Consider stopover flights as they are often cheaper.</li>
            <li>
              Avoid traveling on weekends, as air tickets are higher during this time.
            </li>
            <li>Try budget airlines like Indigo, Air India for affordable flights.</li>
          </ul>
        </div>
      ),
    },
    {
      question: "What are the benefits of flight booking with ixigo?",
      answer:
        "The benefits of flight booking with ixigo include cheap fares, easy ticket booking, real-time flight status tracking, exclusive flight ticket offers, flexible date options, and quick refunds.",
    },
    {
      question:
        "How do you make flexible online flight ticket booking with changeable dates?",
      answer:
        "Select your preferred flight and opt for 'Assured Flex' on the 'Review Flight' page to make flexible online flight ticket bookings with changeable dates. This will allow you to modify your travel dates.",
    },
    {
      question: "Can I modify or cancel my flight booking?",
      answer:
        "Yes, you can modify or cancel your flight booking on ixigo with Assured and Assured Flex fares. Assured offers free cancellations on new bookings, while Assured Flex provides free cancellations or one-time free rescheduling, including date, airline, and route changes.",
    },
    {
      question: "What documents do I need for my flight?",
      answer:
        "You'll need a valid photo ID, such as a passport, Aadhaar, or driver's license, and your flight ticket or e-ticket. For international flights, a valid passport and visa are required.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto bg-gradient-to-br from-white via-gray-100 to-gray-50 p-6 md:p-10 rounded-lg shadow-lg mt-10 md:mt-14 my-4">
      <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-10 md:text-4xl lg:text-5xl">
        Frequently Asked Questions
      </h1>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-300 pb-4 last:border-b-0 transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left text-gray-800 font-medium text-lg md:text-xl py-3 hover:text-blue-600 focus:outline-none focus:ring focus:ring-blue-300 rounded-lg"
            >
              <span>{faq.question}</span>
              <span
                className={`transform transition-transform ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>
            {activeIndex === index && (
              <div className="text-gray-700 mt-3 space-y-2 text-sm md:text-base animate-fadeIn">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
      <button className="block mx-auto mt-10 px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold text-sm md:text-base rounded-full hover:shadow-lg hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring focus:ring-blue-300">
        View More
      </button>
    </div>
  );
}

export default FAQ;
