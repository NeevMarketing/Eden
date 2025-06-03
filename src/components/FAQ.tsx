
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Who is Eden Gracious Living for?",
      answer: "Eden is designed for independent, self-sufficient seniors looking for restful short or long stays in a premium environment. Our accommodations offer a perfect blend of hospitality and wellness for those seeking a serene, comfortable living experience with the right level of support."
    },
    {
      question: "Are meals included in the packages?",
      answer: "Yes, all our packages include three daily nutritious meals prepared by our chef, along with regular refreshments. We can accommodate dietary preferences and restrictions with advance notice."
    },
    {
      question: "Can families visit during a stay?",
      answer: "Absolutely! We encourage family visits and have designed our spaces to accommodate guests. We can also arrange guest meals or help organize small gatherings in our community spaces upon request."
    },
    {
      question: "What wellness or care options are available?",
      answer: "Eden offers a range of wellness programs including yoga, meditation, and therapeutic activities. While we are not a medical facility, we provide on-call medical support and can arrange for specialized care if needed."
    },
    {
      question: "How do I book a stay at Eden?",
      answer: "Booking is simple. You can fill out our enquiry form, call us directly, or send us an email. Our team will guide you through available options, arrange a property tour if desired, and help finalize your reservation."
    },
    {
      question: "Is transportation available to local attractions or medical appointments?",
      answer: "Yes, we offer scheduled transportation services to nearby areas and can arrange private transportation for medical appointments or personal outings with advance notice."
    },
    {
      question: "Are there any additional charges beyond the package price?",
      answer: "Our packages are designed to be all-inclusive, covering accommodation, meals, housekeeping, and basic amenities. Additional services like specialized medical care, private transportation, or certain premium activities may incur extra charges."
    }
  ];

  return (
    <section id="faq" className="section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-eden-dark">Frequently Asked Questions</h2>
          <div className="w-20 h-1 bg-eden mx-auto mb-6"></div>
          <p className="text-eden-text">
            Find answers to commonly asked questions about Eden Gracious Living's accommodations and services.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-eden-light/50 rounded-lg px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-serif text-eden-dark hover:text-eden">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-eden-text pt-2 pb-4">
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

export default FAQ;
