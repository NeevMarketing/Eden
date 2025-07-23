import React from "react";
import { CheckCircle } from "lucide-react";
const WhyChoose: React.FC = () => {
  const reasons = [
    {
      title: "Flexible Stays, Simple Comfort",
      description:
        "Eden welcomes you with peaceful, fully serviced apartments with flexible stay options.",
    },
    {
      title: "Community That Fits You",
      description:
        "Eden offers a gentle, welcoming community, Whether you prefer peaceful hours in your apartment or lounge with others.",
    },
    {
      title: "Comfort Backed by Care",
      description:
        "Live confidently, knowing that thoughtful care and healthcare support are always on call.",
    },
    {
      title: "Trusted by Families, Chosen by Seniors",
      description:
        "Families trust Eden as it offers security, thoughtful care, and a beautiful place to thrive.",
    },
  ];
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Home%20page/Why-(1).jpg?updatedAt=1749654846727"
                alt="Eden Wellness & Hospitality"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-eden-accent/30 rounded-lg -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-eden-light rounded-lg -z-10"></div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-eden-dark">
              Why Choose Eden?
            </h2>
            <div className="w-20 h-1 bg-eden mb-6"></div>

            <p className="text-eden-text mb-8 italic">
              Set in the quiet hills of Dehradun, Here, mornings are slow, the
              air is fresh, and the backdrop of mountains makes everyday feel
              like a retreat.
            </p>

            <ul className="space-y-6">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-start">
                  <div className="mt-1 text-eden mr-4">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-eden-dark mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-eden-text">{reason.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhyChoose;
