import React, { useState } from "react";
import "./All.scss";
const All = () => {
  // const [allTrackList, setAllTrackList] = useState(false);
  return (
    <div className="all-track-list flex justify-center">
      <button className="all-track-list__upload-btn fs-30 w-600 fc-white">
        Upload file
      </button>
    </div>
  );
};

export default All;
