import React, { useEffect } from "react";
import { useState } from "react";

const Read = () => {
  const [data, setData] = useState();
  async function getData() {
    const response = await fetch("http://localhost:5000/details");
    const result = await response.json();
    if (response.ok) {
      setData(result);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  // console.log(data);

  return (
    <div className="container my-2">
      <h2 className="text-center">Read All the Post</h2>
      <div className="row">
        {data?.map((ele) => (
          <div key={ele._id} className="col-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{ele.foodname}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{ele.price}</h6>
                <p className="card-text">{ele.desc}</p>
                <a href="#" className="card-link">
                  Delete
                </a>
                <a href="#" className="card-link">
                  Edit
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Read;
