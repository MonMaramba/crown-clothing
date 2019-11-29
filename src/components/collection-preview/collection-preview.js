import React from "react";

import "./collection-preview.scss";

export const CollectionPreview = ({ title, items }) => {
  console.log(title, items);
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4) // to limit results to 4. filter returns an array
          .map(item => (
            <div key={item.id}>{item.name}</div>
          ))}
      </div>
    </div>
  );
};
