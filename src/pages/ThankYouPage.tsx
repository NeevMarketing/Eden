
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Home, Calendar, Phone } from 'lucide-react';

const ThankYouPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              
              <h1 className="text-4xl font-serif font-bold text-stone-800 mb-4">
                Thank You for Your Interest!
              </h1>
              
              <p className="text-lg text-stone-600 leading-relaxed">
                We're excited to help you begin your wellness journey at Eden. Our sanctuary specialists will review your inquiry and contact you within 24 hours.
              </p>
            </div>

            <Card className="bg-white/80 backdrop-blur-sm border-stone-200 mb-8">
              <CardHeader>
                <CardTitle className="text-xl font-serif text-stone-800">What Happens Next?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-eden/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-eden font-semibold">1</span>
                  </div>
                  <div className="text-left">
                    <h4 className="font-medium text-stone-800">Review & Assessment</h4>
                    <p className="text-stone-600 text-sm">Our wellness team will review your preferences and requirements</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-eden/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-eden font-semibold">2</span>
                  </div>
                  <div className="text-left">
                    <h4 className="font-medium text-stone-800">Personalized Consultation</h4>
                    <p className="text-stone-600 text-sm">A dedicated specialist will contact you with tailored recommendations</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-eden/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-eden font-semibold">3</span>
                  </div>
                  <div className="text-left">
                    <h4 className="font-medium text-stone-800">Sanctuary Experience</h4>
                    <p className="text-stone-600 text-sm">Begin your transformative wellness journey at Eden</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-200 mb-8">
              <h3 className="font-semibold text-emerald-800 mb-2">Need Immediate Assistance?</h3>
              <p className="text-emerald-700 text-sm mb-4">
                If you have urgent questions or would like to speak with someone immediately, please don't hesitate to reach out.
              </p>
              <div className="flex items-center justify-center space-x-2 text-emerald-700">
                <Phone className="w-4 h-4" />
                <span className="font-medium">+91 9876543210</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.location.href = '/'}
                className="bg-eden hover:bg-emerald-700 text-white px-8 py-3 rounded-xl flex items-center space-x-2"
              >
                <Home className="w-4 h-4" />
                <span>Return Home</span>
              </Button>
              
              <Button 
                variant="outline"
                onClick={() => window.location.href = '/#accommodations'}
                className="border-eden text-eden hover:bg-eden hover:text-white px-8 py-3 rounded-xl flex items-center space-x-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Explore More Options</span>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ThankYouPage;
