
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsPrivacyPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Banner Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80')" }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-serif font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl font-light">Your privacy and data protection matters to us</p>
        </div>
      </section>

      <main className="section-padding">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-serif font-bold text-stone-800 mb-6">Terms of Service & Privacy Policy</h2>
            
            <h3 className="text-2xl font-serif font-semibold text-stone-800 mb-4">1. Information We Collect</h3>
            <p className="text-stone-600 mb-6">
              We collect information you provide directly to us, such as when you create an account, make a reservation, 
              or contact us for support. This may include your name, email address, phone number, payment information, 
              and preferences for your stay.
            </p>

            <h3 className="text-2xl font-serif font-semibold text-stone-800 mb-4">2. How We Use Your Information</h3>
            <p className="text-stone-600 mb-6">
              We use the information we collect to provide, maintain, and improve our services, process transactions, 
              send you technical notices and support messages, and communicate with you about promotions and updates.
            </p>

            <h3 className="text-2xl font-serif font-semibold text-stone-800 mb-4">3. Information Sharing</h3>
            <p className="text-stone-600 mb-6">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
              except as described in this policy. We may share information with trusted partners who assist us in operating 
              our services, conducting business, or serving you.
            </p>

            <h3 className="text-2xl font-serif font-semibold text-stone-800 mb-4">4. Data Security</h3>
            <p className="text-stone-600 mb-6">
              We implement appropriate security measures to protect your personal information against unauthorized access, 
              alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
            </p>

            <h3 className="text-2xl font-serif font-semibold text-stone-800 mb-4">5. Your Rights</h3>
            <p className="text-stone-600 mb-6">
              You have the right to access, update, or delete your personal information. You may also opt out of certain 
              communications from us. To exercise these rights, please contact us using the information provided below.
            </p>

            <h3 className="text-2xl font-serif font-semibold text-stone-800 mb-4">6. Changes to This Policy</h3>
            <p className="text-stone-600 mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
              Privacy Policy on this page and updating the "Last Updated" date.
            </p>

            <h3 className="text-2xl font-serif font-semibold text-stone-800 mb-4">7. Contact Us</h3>
            <p className="text-stone-600 mb-6">
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              Email: info@edenseniors.com
              <br />
              Phone: +91-7533909333
              <br />
              Address: Khasra 39 & 40, Near Vaibhav Farms, Purkul Road, Bhagwantpur, Dehradun 248 009, Uttarakhand, India
            </p>

            <p className="text-stone-500 text-sm mt-8">
              Last Updated: December 2024
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsPrivacyPage;
