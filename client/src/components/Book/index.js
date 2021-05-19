import React from "react";
function Book({ title, subtitle, authors, link, description, image, Button }) {
  return (
    <ul>
      <div className="row flex-wrap-reverse">
        <div className="col-md-8">
          <h3 className="font-italic">{title}</h3>
          {subtitle && <h5 className="font-italic">{subtitle}</h5>}
        </div>
        <div className="col-md-4">
          <div className="btn-container">
            <a
              className="btn btn-info"
              target="_blank"
              rel="noopener noreferrer"
              href={link}
              id="text"
            >
              View
            </a>
            <Button />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <p className="font-italic small">Written by {authors}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12-sm-4-md-2">
          <img
            className="img-thumbnail img-fluid w-100"
            src={image}
            alt={title}
          />
        </div>
        <div className="col-12-sm-8-md-10">
          <p>{description}</p>
        </div>
      </div>
    </ul>
  );
}

export default Book;