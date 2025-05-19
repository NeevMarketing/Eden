
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactInfo: React.FC<{ icon: React.ReactNode; title: string; content: string | React.ReactNode }> = ({ 
  icon, 
  title, 
  content 
}) => {
  return (
    <div className="flex items-start">
      <div className="text-eden mr-4">{icon}</div>
      <div>
        <h4 className="font-medium text-eden-dark">{title}</h4>
        <div className="text-eden-text">{content}</div>
      </div>
    </div>
  );
};

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-padding bg-eden-beige/30">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-eden-dark">Contact Us</h2>
          <div className="w-20 h-1 bg-eden mx-auto mb-6"></div>
          <p className="text-eden-text">
            Have questions or ready to explore Eden? We'd love to hear from you and help plan your stay.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="border-eden-light/50 shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-2xl font-serif text-eden-dark mb-6">Enquiry Form</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" placeholder="Your phone number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="room-type">Preferred Room Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select room type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="studio">Studio Apartment</SelectItem>
                        <SelectItem value="1bhk">1BHK Apartment</SelectItem>
                        <SelectItem value="2bhk">2BHK Apartment</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="duration">Preferred Duration</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1week">1 Week</SelectItem>
                        <SelectItem value="2weeks">2 Weeks</SelectItem>
                        <SelectItem value="3weeks">3 Weeks</SelectItem>
                        <SelectItem value="4weeks">4 Weeks</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message or specific requirements" rows={4} />
                </div>
                
                <Button type="submit" className="btn-primary w-full">
                  Send Enquiry
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif text-eden-dark mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <ContactInfo
                  icon={<MapPin />}
                  title="Location"
                  content={
                    <address className="not-italic">
                      Eden Gracious Living<br />
                      123 Peaceful Valley Road<br />
                      Dehradun, Uttarakhand 248001
                    </address>
                  }
                />
                
                <ContactInfo
                  icon={<Phone />}
                  title="Phone"
                  content={
                    <a href="tel:+919876543210" className="hover:text-eden">
                      +91 98765 43210
                    </a>
                  }
                />
                
                <ContactInfo
                  icon={<Mail />}
                  title="Email"
                  content={
                    <a href="mailto:info@edengraciousliving.com" className="hover:text-eden">
                      info@edengraciousliving.com
                    </a>
                  }
                />
              </div>
            </div>
            
            <div className="overflow-hidden rounded-lg h-80 shadow-md">
              {/* This is a placeholder for a map. In a real implementation, you would use Google Maps or similar */}
              <div className="w-full h-full bg-eden-light/50 flex items-center justify-center">
                <div className="text-center p-6">
                  <MapPin className="mx-auto mb-4 text-eden" size={32} />
                  <h4 className="text-xl font-serif text-eden-dark mb-1">Eden Gracious Living</h4>
                  <p className="text-eden-text">Dehradun, Uttarakhand</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
