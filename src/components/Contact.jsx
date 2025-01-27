import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ceigg2k", // Replace with your EmailJS Service ID
        "template_ab3uq34", // Replace with your EmailJS Template ID
        e.target,
        "rohanwarghade05@gmail.com" // Replace with your EmailJS User ID
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
        },
        (error) => {
          console.error("Error sending email:", error.text);
        }
      );

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-9 text-white rounded-lg shadow-lg"
    >
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="text-3xl font-semibold mb-8 text-center"
      >
        Get in Touch
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className="mb-6"
      >
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-200"
        >
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 "
          placeholder="Enter your name"
          required
        />
      </motion.div>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="mb-6"
      >
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-200"
        >
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your email"
          required
        />
      </motion.div>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className="mb-8"
      >
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-200"
        >
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="5"
          placeholder="Enter your message"
          required
        ></textarea>
      </motion.div>
      <div className="text-center">
        <button
          type="submit"
          className="px-8 py-3 bg-purple-400 text-white font-medium rounded-md hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
