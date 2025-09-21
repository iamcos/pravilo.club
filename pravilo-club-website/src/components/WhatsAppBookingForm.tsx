"use client";
import React, { useState } from 'react';
import { Dictionary } from '@/lib/i18n';

type WhatsAppBookingFormProps = {
  dictionary: Dictionary;
};

export default function WhatsAppBookingForm({ dictionary }: WhatsAppBookingFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [service, setService] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Hello Misha, I would like to book a Pravilo session.\n\nName: ${name}\nEmail: ${email}\nDate: ${date}\nTime: ${time}\nService: ${service}\n\nLooking forward to hearing from you!`;

    // IMPORTANT: Replace with Misha's actual WhatsApp number including country code (e.g., '1234567890')
    const whatsappNumber = '+66886843703'; 
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="whatsapp-booking" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Book Your Session via WhatsApp</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-gray-100 p-8 rounded-lg shadow-lg">
          <div className="mb-4 text-left">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
            <input
              type="text"
              id="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4 text-left">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4 text-left">
            <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">Preferred Date:</label>
            <input
              type="date"
              id="date"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className="mb-4 text-left">
            <label htmlFor="time" className="block text-gray-700 text-sm font-bold mb-2">Preferred Time:</label>
            <input
              type="time"
              id="time"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>
          <div className="mb-6 text-left">
            <label htmlFor="service" className="block text-gray-700 text-sm font-bold mb-2">Service of Interest:</label>
            <select
              id="service"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={service}
              onChange={(e) => setService(e.target.value)}
              required
            >
              <option value="">Select a Service</option>
              {dictionary.services.map((s, idx) => (
                <option key={idx} value={s.name}>{s.name}</option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-300 transform hover:scale-105"
          >
            Send Inquiry via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}

