import React from "react";
import { useState } from "react";

const Create = () => {
  const [foodname, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [desc, setDesc] = useState("");

  console.log(foodname, price, desc);

  const handlesubmit = async (e) => {
    e.preventDefault();
    const addUser = { foodname, price, desc };
    const response = await fetch("http://localhost:5000/details", {
      method: "POST",
      body: JSON.stringify(addUser),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();

    if (!response.ok) {
      console.log(result.error);
    }

    if (response.ok) {
      console.log(result);
    }
  };
  return (
    <div className="container my-2">
      <h3 className="text-center">Enter the Post Data</h3>
      <form onSubmit={handlesubmit}>
        <div className="mb-3">
          <label className="form-label">Name of the food</label>
          <input
            type="text"
            className="form-control"
            value={foodname}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="number"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input
            type="text"
            className="form-control"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
