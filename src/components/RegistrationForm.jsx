import React, { useState } from "react";
import "../App.css";

const Registration = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    dob: "",
  });

  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false); // Popup for success message

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const validateForm = () => {
    let newErrors = {};
    const today = new Date();
    const inputDate = new Date(formData.dob);

    if (!formData.username.trim()) {
      newErrors.username = "Username is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password.";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    if (!formData.dob) {
      newErrors.dob = "Date of birth is required.";
    } else if (inputDate > today) {
      newErrors.dob = "Date of birth cannot be in the future.";
    } else if (calculateAge(formData.dob) < 18) {
      newErrors.dob = "You must be at least 18 years old.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setShowPopup(true); // Show success popup
      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        dob: "",
      });
      setErrors({});
    }
  };

  return (
    
    <div className="registration-wrapper">
      <div className="registration-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            className="styled-input"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <p className="error-text">{errors.username}</p>}
        </div>

        <div className="form-wrapper">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            className="styled-input"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>

        <div className="form-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className="styled-input"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error-text">{errors.password}</p>}
        </div>

        <div className="form-wrapper">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            className="styled-input"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}
        </div>

        <div className="form-wrapper">
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="date"
            className="styled-input"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
          {errors.dob && <p className="error-text">{errors.dob}</p>}
        </div>

        <button type="submit" className="styled-button">Register</button>
      </form>

      {/* Success Popup Modal */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h3>Registration Successful!</h3>
            <p>Thank you for registering. Your details have been submitted successfully.</p>
            <button onClick={() => setShowPopup(false)} className="close-button">OK</button>
          </div>
        </div>
      )}
    </div>

    </div>
 
  );
};

export default Registration;
