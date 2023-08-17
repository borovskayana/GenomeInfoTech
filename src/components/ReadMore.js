import React, { useState } from "react";

  
const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <div className="text">
      {isReadMore ? text.slice(0, 400) : text}
      <span onClick={toggleReadMore} className="read-or-hide" style={{color:"rgba(31, 102, 16, .6)", fontSize: "1.3em"}}>
        {isReadMore ? "...read more" : " show less..."}
      </span>
    </div>
  );
};

  

export default ReadMore;