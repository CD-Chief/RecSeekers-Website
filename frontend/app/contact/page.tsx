"use client"; 

import React, { useState } from 'react';

export default function ContactPage() {
  // Set up state to handle form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Update state when user types
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle the form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your API or email service logic here
    console.log('Form submitted:', formData);
    alert("Thanks for reaching out! We'll get back to you soon.");
    
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <main className="container mx-auto px-4 py-16 max-w-5xl">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
        Contact Us
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* --- Left Column: Contact Information --- */}
        <div className="flex flex-col justify-center space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Get in Touch</h2>
            <p className="text-gray-600 leading-relaxed">
              Have a question, feedback, or just want to say hi? Fill out the form, 
              and our team will get back to you as soon as possible.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center text-gray-700">
              <span className="font-bold mr-3">Email:</span> 
              <a href="mailto:hello@yourwebsite.com" className="text-blue-600 hover:underline">
                hello@yourwebsite.com
              </a>
            </div>
            <div className="flex items-center text-gray-700">
              <span className="font-bold mr-3">Phone:</span> 
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-start text-gray-700">
              <span className="font-bold mr-3">Address:</span> 
              <span>123 Figma Lane<br />Web Design City, WD 90210</span>
            </div>
          </div>
        </div>

        {/* --- Right Column: Contact Form --- */}
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none"
                placeholder="How can we help you?"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
        
      </div>
    </main>
  );
}