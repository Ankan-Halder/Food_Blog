import React from "react";

const Create = () => {
  return (
    <div className="container my-2">
      <h3 className="text-center">Enter the Post Data</h3>
      <form>
        <div className="mb-3">
          <label className="form-label">Name of the food</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input type="number" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input type="text" className="form-control" />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
