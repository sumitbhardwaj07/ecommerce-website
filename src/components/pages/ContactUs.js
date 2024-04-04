// ContactUs.js
import { useState } from "react";
import { Button } from "react-bootstrap";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
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
      const response = await fetch("https://ecommerce-d138d-default-rtdb.asia-southeast1.firebasedatabase.app/data.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        
        console.log("Data submitted successfully!");
      } else {
    
        console.error("Error submitting data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          className="form-control"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email Id</label>
        <input
          id="email"
          type="email"
          className="form-control"
          value={formData.email}
          onChange={handleChange}
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
        />
      </div>
      <div className="form-group">
        <Button type="submit" variant="primary" className="submit-btn">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default ContactUs;
