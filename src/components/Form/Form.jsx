import React, { useState } from "react";
import FormField from "../FormField/FormField";
import "./Form.css";

function Form(props) {
  const { onSubmit } = props;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    linkedin: "",
    personalWebsite: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [sameAsLinkedin, setSameAsLinkedin] = useState(false);

  const validateField = (fieldValue, fieldName) => {
    if (fieldName === "name") {
      if (!fieldValue || fieldValue === "") {
        return "Name is required";
      }
    } else if (fieldName === "email") {
      if (!fieldValue || fieldValue === "") {
        return "Email is required";
      } else if (!fieldValue.includes("@")) {
        return "Please enter a valid email address";
      }
    } else if (fieldName === "linkedin") {
      if (!fieldValue || fieldValue === "") {
        return "LinkedIn profile is required";
      } else if (!fieldValue.startsWith("https://")) {
        return "Please enter a valid LinkedIn URL";
      }
    } else if (fieldName === "personalWebsite") {
      if (!fieldValue || fieldValue === "") {
        return "Personal website is required";
      } else if (!fieldValue.startsWith("https://")) {
        return "Please enter a valid website URL";
      }
    } else if (fieldName === "message") {
      if (!fieldValue || fieldValue === "") {
        return "Message is required";
      }
    }

    return "";
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }

    if (name === "linkedin" && sameAsLinkedin) {
      setFormData((prev) => ({
        ...prev,
        personalWebsite: value,
      }));
    }
  };

  const handleLinkedinChange = (e) => {
    const linkedinUrl = e.target.value;
    setFormData((prev) => ({
      ...prev,
      linkedin: linkedinUrl,
    }));

    // Clear LinkedIn error when user starts typing
    if (errors.linkedin) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.linkedin;
        return newErrors;
      });
    }

    if (sameAsLinkedin) {
      setFormData((prev) => ({
        ...prev,
        personalWebsite: linkedinUrl,
      }));
    }
  };

  const handleSameAsLinkedinChange = (e) => {
    const isChecked = e.target.checked;
    setSameAsLinkedin(isChecked);

    if (isChecked) {
      setFormData((prev) => ({
        ...prev,
        personalWebsite: prev.linkedin,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(formData[key], key);
      if (error) {
        newErrors[key] = error;
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      if (onSubmit) {
        onSubmit(formData);
      }
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <FormField
        label="Name"
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        required={true}
        placeholder="Your full name"
        error={errors.name}
      />

      <FormField
        label="Email"
        type="text"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        required={true}
        placeholder="your.email@example.com"
        error={errors.email}
      />

      <FormField
        label="LinkedIn Profile"
        type="url"
        id="linkedin"
        name="linkedin"
        value={formData.linkedin}
        onChange={handleLinkedinChange}
        placeholder="https://linkedin.com/in/yourprofile"
        error={errors.linkedin}
      />

      <div className="form-group checkbox-group">
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={sameAsLinkedin}
            onChange={handleSameAsLinkedinChange}
          />
          <span className="checkmark"></span>
          Personal website same as LinkedIn
        </label>
      </div>

      <FormField
        label="Personal Website"
        type="url"
        id="personalWebsite"
        name="personalWebsite"
        value={formData.personalWebsite}
        onChange={handleInputChange}
        placeholder="https://yourwebsite.com"
        readOnly={sameAsLinkedin}
        error={errors.personalWebsite}
      />

      <FormField
        label="Message"
        type="textarea"
        id="message"
        name="message"
        value={formData.message}
        onChange={handleInputChange}
        required={true}
        placeholder="Tell me about your project or opportunity..."
        error={errors.message}
      />

      <button type="submit" className="submit-btn">
        Send Message
      </button>
    </form>
  );
}

export default Form;
