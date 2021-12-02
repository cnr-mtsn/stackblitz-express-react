import React, { useState } from 'react';

const Form = ({ setPeople }) => {
  const [formData, setFormData] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/createPerson', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((parsed) => setPeople(parsed))
      .catch((err) => console.error(err));
  };
  const handleChange = (e) => {
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="border border-gray-100 items-center-col space-y-4 rounded-md shadow-lg w-3/4 p-6 h-1/2">
      <h2 className="text-blue-500 font-bold text-lg tracking-wider -mb-2 ">
        Add a new person
      </h2>
      <input
        name="name"
        placeholder="Name"
        value={formData?.name}
        onChange={handleChange}
        className="p-2 border border-gray-100 rounded-md shadow text-sm"
      />
      <input
        name="age"
        type="num"
        placeholder="Age"
        onChange={handleChange}
        value={formData?.age}
        className="p-2 border border-gray-200 rounded-md text-sm"
      />
      <input
        name="title"
        placeholder="Title"
        value={formData?.title}
        onChange={handleChange}
        className="p-2 border border-gray-200 rounded-md text-sm"
      />
      <button
        className="border border-blue-500 border-2 rounded-md py-1 px-3 hover:bg-blue-500 hover:border-gray-100 hover:text-white cursor-pointer text-sm"
        onClick={handleSubmit}
        type="submit"
      >
        Submit
      </button>
    </div>
  );
};
export default Form;
