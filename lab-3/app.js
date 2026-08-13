import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    let newErrors = {};

    // Name validation
    if (name.trim() === "") {
      newErrors.name = "Name is required";
    } else if (name.trim().length < 3) {
      newErrors.name = "Name must contain at least 3 characters";
    }

    // Password validation
    if (password === "") {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password =
        "Password must contain at least 6 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(false);

    const isValid = validateForm();

    if (isValid) {
      setSubmitted(true);
    }
  };

  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">MyStore</div>

        <div className="nav-links">
          <span>All</span>
          <span>Orders</span>
          <span>Products</span>
          <span>Account</span>
        </div>
      </nav>

      {/* Form */}
      <main className="main-content">

        <div className="form-card">

          <h1>Account Form</h1>

          <p className="subtitle">
            Enter your details below
          </p>

          <form onSubmit={handleSubmit}>

            {/* Name */}

            <div className="form-group">

              <label>Name</label>

              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                className={errors.name ? "error-input" : ""}
                onChange={(e) => {
                  setName(e.target.value);

                  if (errors.name) {
                    setErrors({
                      ...errors,
                      name: ""
                    });
                  }
                }}
              />

              {errors.name && (
                <p className="error-message">
                  {errors.name}
                </p>
              )}

            </div>

            {/* Password */}

            <div className="form-group">

              <label>Password</label>

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                className={errors.password ? "error-input" : ""}
                onChange={(e) => {
                  setPassword(e.target.value);

                  if (errors.password) {
                    setErrors({
                      ...errors,
                      password: ""
                    });
                  }
                }}
              />

              {errors.password && (
                <p className="error-message">
                  {errors.password}
                </p>
              )}

            </div>

            {/* Submit */}

            <button type="submit">
              Submit
            </button>

          </form>

          {/* Success */}

          {submitted && (
            <div className="success-message">

              <h3>Form Submitted Successfully! 🎉</h3>

              <p>
                Welcome, {name}!
              </p>

            </div>
          )}

        </div>

      </main>

      {/* Footer */}

      <footer className="footer">
        <p>Made with ❤️ love</p>
      </footer>

    </div>
  );
}

export default App;
