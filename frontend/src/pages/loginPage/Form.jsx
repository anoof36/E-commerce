import { useState, useEffect } from "react";
import "./Form.css";

const Form = () => {
  const [pageType, setPageType] = useState("login");
  const isLogin = pageType === "login";
  const isRegister = pageType === "register";

  console.log(isLogin);
  console.log("register " + isRegister);

  const handleBlur = () => {
    // Implement your blur logic here
  };

  const handleChange = () => {
    // Implement your change logic here
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event)
  };

  const resetForm = () => {
    // Implement your form reset logic here
  };

  const values = {}; // Define your initial values
  const touched = {}; // Define your touched values
  const errors = {}; // Define your error values
  const isSubmitting = false; // Define your submitting state

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          {isRegister && (
            <div>
              <label htmlFor="FullName">Full Name</label>
              <input type="text" name="FullName" placeholder="Your Full Name" />
            </div>
          )}
          <>
            <label htmlFor="email">email</label>
            <input type="email" name="email" placeholder="your email" />
          </>
          <>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="password" />
          </>
          <>
            <span
              className="link"
              onClick={() => {
                resetForm();
                setPageType(isLogin ? "register" : "login");
              }}
            >
              {isLogin ? "create account" : "Go to login"}
            </span>
            <input type="submit" value="submit" />
          </>
        </form>
      </div>
    </>
  );
};

export default Form;



  /* <form className="container" onSubmit={handleSubmit}>
        <div className="form-container">
          {isRegister && (
            <div className="input-wrapper">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.fullName || ""}
              />
              {Boolean(touched.fullName) && Boolean(errors.fullName) && (
                <div className="error-message">{errors.fullName}</div>
              )}
            </div>
          )}
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email || ""}
            />
            {Boolean(touched.email) && Boolean(errors.email) && (
              <div className="error-message">{errors.email}</div>
            )}
          </div>
          <div className="error-message">{errors.email}</div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.password || ""}
            />
            {Boolean(touched.password) && Boolean(errors.password) && (
              <div className="error-message">{errors.password}</div>
            )}
          </div>
          <div className="flex-container">
            <span
              className="link-text"
              onClick={() => {
                resetForm();
                setPageType(isLogin ? "register" : "login");
              }}
            >
              {isLogin ? "Create account" : "Go to login"}
            </span>
            <button
              type="submit"
              disabled={isSubmitting}
              className="submit-button"
            >
              {isLogin ? "Log In" : "Sign Up"}
            </button>
          </div>
        </div>
      </form> */

