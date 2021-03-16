import React, { useState } from "react";

const Form = ({ dataHandler }) => {
  const [inputValue, setInputValue] = useState("");

  const userData = async () => {
    const response = await fetch(`https://api.github.com/users/${inputValue}`);
    const data = response.json();
    return data;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    userData()
      .then((data) => dataHandler(data))
      .catch((err) => console.error(err));
    setInputValue("");
  };

  return (
    <form action="" className="container" onSubmit={handleSubmit}>
      <label htmlFor="userName" className="form-label">
        user name
      </label>
      <input
        required
        type="text"
        id="userName"
        value={inputValue}
        className="form-control"
        placeholder="Enter User Name"
        onChange={(event) => setInputValue(event.target.value)}
      ></input>
      <input
        type="submit"
        value="SUBMIT"
        className="form-control btn btn-success mt-2"
      />
    </form>
  );
};

export default Form;
