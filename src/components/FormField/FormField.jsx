import React from 'react';
import './FormField.css';

function FormField({
  label,
  type = 'text',
  id,
  name,
  value,
  onChange,
  required = false,
  placeholder = '',
  readOnly = false,
  className = '',
  error = ''
}) {
  const renderInput = () => {
    if (type === 'textarea') {
      return (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          readOnly={readOnly}
          className={`form-input ${readOnly ? 'readonly' : ''} ${error ? 'error' : ''} ${className}`}
        />
      );
    }
    
    return (
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        readOnly={readOnly}
        className={`form-input ${readOnly ? 'readonly' : ''} ${error ? 'error' : ''} ${className}`}
      />
    );
  };

  return (
    <div className="form-field">
      <label htmlFor={id} className="form-label">
        {label}
        {required && <span className="required">*</span>}
      </label>
      {renderInput()}
      {error && <div className="error-message">{error}</div>}
    </div>
  );
}

export default FormField; 