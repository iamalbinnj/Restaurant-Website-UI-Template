import { useState } from "react";
import { smtpexpressClient } from "../Components/SMTP/smtpexpress";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      await smtpexpressClient.sendApi.sendMail({
        subject: "Confirmation: Email sent successfully",
        message: `<h2>${formData.message}</h2>`,
        sender: {
          name: "Foodi.com",
          email: "",
        },
        recipients: {
          email: formData.email,
        },
      });
      alert("Your message has been sent successfully!");
      setLoading(false);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      alert("Oops! Something went wrong. Please try again later.");
      console.error("Error sending email:", error);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container max-w-screen-2x1 mx-auto xl:px-24">
        <h5 className="main-heading text-center">Contact Form</h5>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 border ${
                errors.name ? "border-secondary" : "border-gray"
              } rounded-lg focus:ring-2 outline-none`}
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-secondary text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border ${
                errors.email ? "border-secondary" : "border-gray"
              } rounded-lg focus:ring-2 outline-none`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-secondary text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray font-bold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-4 py-2 border ${
                errors.message ? "border-secondary" : "border-gray"
              } rounded-lg focus:ring-2 outline-none`}
              rows="5"
              placeholder="Enter your message"
            />
            {errors.message && (
              <p className="text-secondary text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className="primary-button px-6 py-2"
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;
