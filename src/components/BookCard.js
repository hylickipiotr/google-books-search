import React, { Suspense } from 'react';


const BookCard = ({ thumbnailURL, title, description, url }) => {
  return (
    <div className="card w-100 mb-4">
      <div className="row no-gutters">
        <div className="col-sm-2">
          <a href={url} title={title} >
            <img className="card-img" src={thumbnailURL} alt={title}/>
          </a>
        </div>
        <div className="col-sm-8">
          <div className="card-body">
            <h5 className="card-title">
              <a href={url} title={title}>
                {title}
              </a>
            </h5>
            <p className={`card-text ${description ? '' : 'text-muted'}`}>
              {description ? description : 'No description'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
