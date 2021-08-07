import React from "react";
import "./VideoRow.css";

function VideoRow({
  views,
  subs,
  description,
  timestamp,
  channel,
  title,
  image,
}) {
  return (
    <div className="videoRow">
      <img alt={channel} src={image} />
      <div className="videoRow__text">
        <h4>{title}</h4>
        <p>
          {views} views · {timestamp}
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default VideoRow;
