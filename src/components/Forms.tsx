import React, { useState } from "react";

const defaultFormData = {
  title: "",
  body: "",
};

function Forms() {
  const [formData, setFormData] = useState(defaultFormData);
  const { title, body } = formData; 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);

    setFormData(defaultFormData);
  };
  return (
    <div>
      <h1>Form</h1>
      <p>Create a post</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <br />
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="body">Body</label>
        <br />
        <input
          type="text"
          name="body"
          id="body"
          value={body}
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit">Upload post</button>
      </form>
    </div>
  );
}

export default Forms;
