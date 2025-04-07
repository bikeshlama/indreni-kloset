
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const [openItem, setOpenItem] = useState<string | null>("item-1");

  const faqs = [
    {
      id: "item-1",
      question: "How does the reselling platform work?",
      answer:
        "Our platform connects resellers with quality products at wholesale prices. You browse our catalog, set your own retail prices, and when customers make a purchase from you, we handle the fulfillment and shipping directly to your customers.",
    },
    {
      id: "item-2",
      question: "Do I need to maintain inventory?",
      answer:
        "No! That's the beauty of our platform. We maintain all inventory, so you can focus on marketing and selling. When you make a sale, simply submit the order through our system, and we'll ship the products directly to your customers.",
    },
    {
      id: "item-3",
      question: "How do I determine my profit margins?",
      answer:
        "You have complete control over your pricing strategy. We provide the wholesale base price, and you determine the retail price to your customers, keeping the difference as your profit.",
    },
    {
      id: "item-4",
      question: "What kind of products can I sell?",
      answer:
        "We offer a curated selection of trending fashion items including tops, bottoms, dresses, outerwear, and accessories. Our team constantly updates the catalog based on market trends and seasonal demands.",
    },
    {
      id: "item-5",
      question: "Is there a minimum order quantity?",
      answer:
        "No, there's no minimum order quantity. You can place orders for single items as needed, making it perfect for businesses of any size.",
    },
    {
      id: "item-6",
      question: "How do returns and exchanges work?",
      answer:
        "We have a streamlined process for handling returns and exchanges. Your customers contact you, you submit a return request through our system, and we handle the logistics while keeping you informed at every step.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <div className="inline-block rounded-full bg-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-800 mb-4">
            Common Questions
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about our reselling platform. Can't find the answer you're looking for? Feel free to{" "}
            <a href="/contact" className="text-indigo-600 underline hover:text-indigo-800">
              contact us
            </a>
            .
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion
            type="single"
            collapsible
            className="space-y-4"
            value={openItem}
            onValueChange={(value) => setOpenItem(value)}
          >
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="bg-white rounded-lg shadow-sm border border-gray-100"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-medium text-gray-900">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-1 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
