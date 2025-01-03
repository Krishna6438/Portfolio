import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { FiSend } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let validationErrors = {};
    if (!formData.name.trim()) validationErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      validationErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Invalid email address.";
    }
    if (!formData.message.trim()) validationErrors.message = "Message is required.";
    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validate();
    if (Object.keys(validationError).length > 0) {
      setErrors(validationError);
    } else {
      setErrors({});
      setIsSending(true);

      emailjs
        .send(
          "service_5kwyge8",
          "template_m2y0zf7",
          formData,
          "d5Wrnxom1FEdXXKzo"
        )
        .then(() => {
          toast.success("Message sent successfully.");
          setFormData({ name: "", email: "", message: "" });
        })
        .catch((error) => {
          console.error("EmailJS Error:", error);
          toast.error("Failed to send the message. Please try again later.");
        })
        .finally(() => setIsSending(false));
    }
  };

  return (
    <div className="p-4 lg:w-3/4 mx-auto text-stone-300">
      <Toaster />
      <h2 className="my-8 text-center text-4xl font-semibold tracking-tighter">
        Let's Connect
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-wrap space-y-4 lg:space-y-0 lg:space-x-4">
          {/* Name Input */}
          <div className="lg:w-1/2">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              placeholder="Name"
              onChange={handleChange}
              className="mb-4 w-full rounded-lg border border-stone-600 bg-black px-3 py-2 text-sm text-stone-300 focus:border-blue-400 focus:outline-none"
              aria-label="Name"
            />
            {errors.name && (
              <p className="text-sm text-red-600">{errors.name}</p>
            )}
          </div>

          {/* Email Input */}
          <div className="lg:w-1/3">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              placeholder="Email"
              onChange={handleChange}
              className="mb-4 w-full rounded-lg border border-stone-600 bg-black px-3 py-2 text-sm text-stone-300 focus:border-blue-400 focus:outline-none"
              aria-label="Email"
            />
            {errors.email && (
              <p className="text-sm text-red-600">{errors.email}</p>
            )}
          </div>
        </div>

        {/* Message Input */}
        <div className="mb-4">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            placeholder="Message"
            onChange={handleChange}
            className="w-full rounded-lg border border-stone-600 bg-black px-3 py-2 text-sm text-stone-300 focus:border-blue-400 focus:outline-none"
            rows={6}
            aria-label="Message"
          />
          {errors.message && (
            <p className="text-sm text-red-600">{errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`mb-8 w-full rounded border border-blue-500 bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 ${
            isSending ? "cursor-not-allowed opacity-50" : ""
          }`}
          disabled={isSending}
          aria-label="Send Message"
        >
          <div className="flex items-center justify-center gap-2">
            {isSending ? "Sending..." : "Send"}
            <FiSend />
          </div>
        </button>
      </form>
    </div>
  );
};

export default Contact;
