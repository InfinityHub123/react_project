import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      setErrorMessage('Please fill in all fields');
      setSuccessMessage('');
      return;
    }

    setSuccessMessage('Your message has been sent successfully!');
    setErrorMessage('');

    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-100 to-white px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-10 lg:p-12 rounded-lg shadow-md w-full max-w-lg mt-8 sm:mt-6 lg:mt-4">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
            Contact Us
          </h2>
          {successMessage && (
            <div className="bg-green-100 text-green-700 p-4 rounded mb-4 text-center text-sm">
              {successMessage}
            </div>
          )}
          {errorMessage && (
            <div className="bg-red-100 text-red-700 p-4 rounded mb-4 text-center text-sm">
              {errorMessage}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2 text-base">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 text-base"
                placeholder="Your name"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2 text-base">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 text-base"
                placeholder="Your email address"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2 text-base">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 text-base"
                placeholder="Subject"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2 text-base">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 text-base"
                placeholder="Your message"
                rows="4"
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-md transition duration-300 ease-in-out w-full sm:w-auto text-base"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
