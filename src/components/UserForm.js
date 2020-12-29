import React from "react";
import FormUserDetails from "./FormUserDetails";
import { useState } from "react";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";
import formValidation from "../Helper/formValidation";

const fieldsValidation = {
  firstName: {
    error: "",
    validate: "text",
    minLength: 2,
    maxLength: 20,
  },
  lastName: {
    error: "",
    validate: "text",
    minLength: 2,
    maxLength: 20,
  },
  email: {
    error: "",
    validate: "email",
  },
  occupation: {
    error: "",
    validate: "text",
    minLength: 3,
  },
  city: {
    error: "",
    validate: "text",
    minLength: 3,
    maxLength: 20,
  },
  bio: {
    error: "",
    validate: "text",
    minLength: 3,
  },
};

const UserForm = () => {
  const [steps, setSteps] = useState(1);
  const [formErrors, setFormErrors] = useState({});
  const [fields, setFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: "",
  });

  //   Proceed to next step
  const handleNext = () => {
    setSteps(steps + 1);
  };

  //   Go back to previous step
  const handleBack = () => {
    setSteps(steps - 1);
  };

  //   Handle fields change
  const handleChange = (input) => (e) => {
    setFields({
      ...fields,
      [input]: e.target.value,
    });

    // set errors
    const error = formValidation(input, e.target.value, fieldsValidation) || "";

    setFormErrors({
      [input]: error,
    });
  };

  const handleSteps = (step) => {
    switch (step) {
      case 1:
        return (
          <FormUserDetails
            handleNext={handleNext}
            handleChange={handleChange}
            values={fields}
            formErrors={formErrors}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            handleNext={handleNext}
            handleChange={handleChange}
            handleBack={handleBack}
            values={fields}
            formErrors={formErrors}
          />
        );
      case 3:
        return (
          <Confirm
            handleNext={handleNext}
            handleBack={handleBack}
            values={fields}
          />
        );
      case 4:
        return <Success />;
      default:
        return "Unknown step";
    }
  };

  return <div>{handleSteps(steps)}</div>;
};

export default UserForm;
