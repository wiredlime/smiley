import React, { useState } from "react";

function Form() {
  const [formData, setForm] = useState({
    username: "",
    email: "",
    language: "JAP",
    isGoing: false,
  });
  const [error, setError] = useState("");

  //----handle submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  //-----handle input
  const handleInput = (e) => {
    //validate username
    const isValidUsername =
      formData.username === formData.username.toLowerCase();
    if (!isValidUsername) {
      setError("User name must be lower case");
    }
    //update value with setForm
    const fieldName = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm({ ...formData, [fieldName]: value });
  };

  return (
    <div>
      <p>{error}</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          onChange={handleInput}
          value={formData.username}
          id="username"
          name="username"
          type="text"
        ></input>
        <br />
        <label htmlFor="email">Email</label>
        <input
          onChange={handleInput}
          value={formData.email}
          id="email"
          name="email"
          type="text"
        ></input>
        <br />
        <label htmlFor="language">Language</label>
        <select
          onChange={handleInput}
          id="language"
          name="language"
          value={formData.language}
        >
          <option>VN</option>
          <option>US</option>
          <option>JAP</option>
        </select>
        <br />
        <label htmlFor="isGoing">Is Going</label>
        <input
          onChange={handleInput}
          id="isGoing"
          type="checkbox"
          name="isGoing"
          checked={formData.isGoing}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
