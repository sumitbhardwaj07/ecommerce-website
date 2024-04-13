import { useState } from "react";
import { Button } from "react-bootstrap";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://ecommerce-d138d-default-rtdb.asia-southeast1.firebasedatabase.app/data.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        alert("Your satisfaction is our priority, and we look forward to assisting you soon!");
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          message: "",
        });
      } else {
        alert("Error submitting data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="contact-us-container">
      <h2>Contact Us</h2>
      <p className="contact-intro">
        Have a question, concern, or just want to say hello? We're here to
        help! Please fill out the form below, and one of our dedicated
        executives will reach out to you as soon as possible.
      </p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone No.</label>
          <input
            id="phoneNumber"
            type="tel"
            className="form-control"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            className="form-control"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <Button type="submit" variant="primary" className="submit-btn">
            Submit
          </Button>
        </div>
      </form>
      <div className="contact-info">
        <h3>Alternative Contact Methods</h3>
        <p>Email: info@example.com</p>
        <p>Phone: +123-456-7890</p>
        <p>Address: 123 Main Street, Noida, India</p>
      </div>
    </div>
  );
};

export default ContactUs;
