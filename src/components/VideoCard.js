import { Avatar } from "@material-ui/core";
import React from "react";
import "./VideoCard.css"

function VideoCard({ title, channel, channelImage, image, views, timestamp }) {
  return (
    <div className="videoCard">
      <img className="videoCard__thumbnail" alt="" src={image} />
      <div className="videoCard__info">
        <Avatar
          className="videoCard__avatar"
          alt={channel}
          src={channelImage}
        />
        <div className="video__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} · {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
