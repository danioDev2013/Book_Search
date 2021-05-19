import React from "react";
import "./style.css";

function Search({ q, handleInputChange, handleFormSubmit }) {
  return (
    <div className="container">
      <h3 className="text">Book Search: Enter a book title to begin.</h3>
      <form className="create-form">
        <div className="form-group">
          <label className="text">Book Ttitle: </label>
          <br />
          <input
            className="form-control"
            id="Title"
            type="text"
            value={q}
            name="q"
            onChange={handleInputChange}
            required
          ></input>
          <br />
          <button
            onClick={handleFormSubmit}
            type="submit"
            className="text"
            id="search"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
export default Search;