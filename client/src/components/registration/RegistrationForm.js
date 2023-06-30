import React, { useState } from "react";
import FormError from "../layout/FormError";
import ErrorList from "../layout/ErrorList"
import config from "../../config";
import translateServerErrors from "../../services/translateServerErrors"

const RegistrationForm = () => {
  const [userPayload, setUserPayload] = useState({
    email: "",
    password: "",
    passwordConfirmation: "",
    firstName: "",
    lastName: "",
    username: "",
    city: "",
  });

  const [errors, setErrors] = useState({});
  const [serverErrors, setServerErrors] = useState({})
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const validateInput = (payload) => {
    setErrors({});
    const { email, password, passwordConfirmation } = payload;
    const emailRegexp = config.validation.email.regexp;
    let newErrors = {};
    if (!email.match(emailRegexp)) {
      newErrors = {
        ...newErrors,
        email: "is invalid",
      };
    }

    if (username.trim() == "") {
      newErrors = {
        ...newErrors,
        username: "is required"
      }
    }

    if (username.length < 5) {
      newErrors = {
        ...newErrors,
        username: "must be at least 5 characters long"
      }
    }

    if (lastName.trim() == "") {
      newErrors = {
        ...newErrors,
        lastName: "is required"
      }
    }

    if (lastName.length < 1) {
      newErrors = {
        ...newErrors,
        lastName: "needs to be at least one character"
      }
    }

    if (firstName.trim() == "") {
      newErrors = {
        ...newErrors,
        firstName: "is required"
      }
    }

    if (firstName.length < 1) {
      newErrors = {
        ...newErrors,
        firstName: "needs to be at least one character"
      }
    }

    if (city.trim() == "") {
      newErrors = {
        ...newErrors,
        city: "is required"
      }
    }

    if (city.length < 1) {
      newErrors = {
        ...newErrors,
        city: "not a valid city or town"
      }
    }

    if (password.trim() == "") {
      newErrors = {
        ...newErrors,
        password: "is required",
      };
    }

    if (passwordConfirmation.trim() === "") {
      newErrors = {
        ...newErrors,
        passwordConfirmation: "is required",
      };
    } else {
      if (passwordConfirmation !== password) {
        newErrors = {
          ...newErrors,
          passwordConfirmation: "does not match password",
        };
      }
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      return true
    }
    return false
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (validateInput(userPayload)) {
      try {
        if (Object.keys(errors).length === 0) {
          const response = await fetch("/api/v1/users", {
            method: "post",
            body: JSON.stringify(userPayload),
            headers: new Headers({
              "Content-Type": "application/json",
            }),
          });
          if (!response.ok) {
            if (response.status === 422) {
              const errorBody = await response.json()
              const newServerErrors = translateServerErrors(errorBody.errors)
              setServerErrors(newServerErrors)
            }
            const errorMessage = `${response.status} (${response.statusText})`;
            const error = new Error(errorMessage);
            throw error;
          }
          const userData = await response.json();
          setShouldRedirect(true);
        }
      } catch (err) {
        console.error(`Error in fetch: ${err.message}`);
      }
    }
  };

  const onInputChange = (event) => {
    setUserPayload({
      ...userPayload,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  if (shouldRedirect) {
    location.href = "/";
  }

  return (
    <div className="grid-container">
      <h1>Sign Up</h1>
      <ErrorList errors={serverErrors} />
      <form onSubmit={onSubmit}>
        <div>
          <label>
            First Name
            <input type="text" name="firstName" placeholder="First Name" value={userPayload.firstName} onChange={onInputChange}></input>
          <FormError error={errors.firstName} />
          </label>
        </div>
        <div>
          <label>
            Last Name
            <input type="text" name="lastName" placeholder="Last Name" value={userPayload.lastName} onChange={onInputChange}></input>
          <FormError error={errors.lastName} />
          </label>
        </div>
        <div>
          <label>
            Username
            <input type="text" name="username" placeholder="Username" value={userPayload.username} onChange={onInputChange}></input>
          <FormError error={errors.username} />
          </label>
        </div>
        <div>
          <label>
            Email
            <input type="text" name="email" placeholder="Email" value={userPayload.email} onChange={onInputChange} />
            <FormError error={errors.email} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={userPayload.password}
              onChange={onInputChange}
            />
            <FormError error={errors.password} />
          </label>
        </div>
        <div>
          <label>
            Password Confirmation
            <input
              type="password"
              name="passwordConfirmation"
              placeholder="Confirm Password"
              value={userPayload.passwordConfirmation}
              onChange={onInputChange}
            />
            <FormError error={errors.passwordConfirmation} />
          </label>
        </div>
        <div>
          <input type="submit" className="button" value="Register" />
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;