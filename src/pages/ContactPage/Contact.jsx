import React from "react";
import Form from "../../components/Form/Form";
import "./Contact.css";

function Contact() {
  const handleFormSubmit = (formData) => {
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I will get back to you soon.");
  };

  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <p>
        Feel free to reach out! I'm always interested in new opportunities and
        collaborations.
      </p>

      <Form onSubmit={handleFormSubmit} />
    </div>
  );
}

export default Contact;
