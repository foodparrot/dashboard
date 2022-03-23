import React from "react";
import './index.css';
const Loading = () => {
  return (
    <div className="loadingImg">
      <img className="loadingGif" alt="loading" src="/images/authLoading.gif" />
    </div>
  );
};

export default Loading;