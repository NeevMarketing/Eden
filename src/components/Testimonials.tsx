
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CircleUser } from "lucide-react";

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ quote, name, title }) => {
  return (
    <Card className="border-eden-light/50 shadow-sm">
      <CardContent className="p-6">
        <div className="flex justify-center mb-6">
          <CircleUser className="text-eden h-12 w-12" />
        </div>
        <blockquote className="text-center">
          <p className="text-eden-text italic mb-4">"{quote}"</p>
          <footer>
            <div className="font-medium text-eden-dark">{name}</div>
            <div className="text-sm text-muted-foreground">{title}</div>
          </footer>
        </blockquote>
      </CardContent>
    </Card>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Eden Gracious Living has given my father a beautiful place to stay during his visits to Dehradun. The attention to detail and care from the staff is exceptional.",
      name: "Priya Sharma",
      title: "Daughter of a Resident"
    },
    {
      quote: "I've stayed at several senior accommodations, but Eden stands out for its warmth and hospitality. It truly feels like a home away from home.",
      name: "Dr. Rajesh Khanna",
      title: "Regular Guest"
    },
    {
      quote: "My wife and I enjoy our monthly visits to Eden. The wellness programs and serene environment help us rejuvenate completely.",
      name: "Amrit Singh",
      title: "Recurring Guest"
    }
  ];

  return (
    <section className="section-padding bg-eden-beige/30">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-eden-dark">Guest Stories</h2>
          <div className="w-20 h-1 bg-eden mx-auto mb-6"></div>
          <p className="text-eden-text">
            Hear from families and guests who have experienced the warmth and care at Eden Gracious Living.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
