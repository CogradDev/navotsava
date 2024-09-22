import React, { useState } from "react";
import axios from "axios";

const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://formspree.io/f/mnnakzyn", {
        name,
        email,
        message,
      });
      setSuccess(true);
      setError(false);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setError(true);
      setSuccess(false);
    }
  };

  return (
    <div className=" flex flex-col justify-center items-center bg-gray-50 px-4 md:px-8 py-8">
      {/* Feedback Title */}
      <h2 className="text-3xl  self-start ml-24 sm:text-4xl md:text-5xl lg:text-6xl mb-10 font-extrabold text-gray-900 text-center drop-shadow-lg">
        Feedback Form
      </h2>

      {/* Form Container */}
      <div className="max-w-full sm:max-w-md w-full bg-white rounded-xl shadow-2xl p-6 md:p-10 ">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-lg md:text-xl font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              placeholder="Your Name"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-lg md:text-xl font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              placeholder="Your Email"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-lg md:text-xl font-medium text-gray-700">
              Your Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={6}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              placeholder="Type your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold text-lg p-4 rounded-lg shadow-lg focus:ring-4 focus:ring-blue-300 transition duration-300 hover:bg-gradient-to-l transform hover:scale-105"
          >
            Send Feedback
          </button>

          {/* Success and Error Messages */}
          {success && (
            <p className="mt-4 text-green-600 text-center text-lg font-semibold">
              Thank you for your feedback!
            </p>
          )}
          {error && (
            <p className="mt-4 text-red-600 text-center text-lg font-semibold">
              There was an error submitting your feedback. Please try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
