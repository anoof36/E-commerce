import { useState, useEffect } from "react";
import "./Form.css";

const initialValuesLogin = {
  email: "",
  password: "",
};

const initialValuesRegister = {
  fullName: "",
  ...initialValuesLogin
}

const Form = () => {
  const [pageType, setPageType] = useState("login");
  const [inputValues, setInputValues] = useState(
    pageType === "login" ? initialValuesLogin : initialValuesRegister
  );

  const isLogin = pageType === "login";
  const isRegister = pageType === "register";

  const handleBlur = (event) => {
    console.log(event.target.value + " i am on blur--------------------");
  };

  const handleChange = (event) => {
    const {name, value }= event.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputValues);
  };

  const resetForm = () => {
    setInputValues({
      fullName: "",
      email: "",
      password: "",
    })
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          {isRegister && (
            <div>
              <label htmlFor="FullName">Full Name</label>
              <input
                type="text"
                name="fullName"
                placeholder="Your Full Name"
                value={inputValues.fullName}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </div>
          )}
          <>
            <label htmlFor="email">email</label>
            <input
              type="email"
              name="email"
              placeholder="your email"
              value={inputValues.email}
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </>
          <>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="password"
              value={inputValues.password}
              onBlur={handleBlur}
              onChange={handleChange}
            />
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
