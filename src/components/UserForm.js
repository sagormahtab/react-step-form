import React from "react";
import FormUserDetails from "./FormUserDetails";
import { useState } from "react";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";

const UserForm = () => {
  const [steps, setSteps] = useState(1);
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
  };

  const handleSteps = (step) => {
    switch (step) {
      case 1:
        return (
          <FormUserDetails
            handleNext={handleNext}
            handleChange={handleChange}
            values={fields}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            handleNext={handleNext}
            handleChange={handleChange}
            handleBack={handleBack}
            values={fields}
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
