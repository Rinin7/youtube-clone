import React from "react";
import "./VideoCard.scss";
import Avatar from "@material-ui/core/Avatar";

function VideoCard({ image, title, channel, views, timestamp, channelImage }) {
  return (
    <div className="videocard">
      <img className="videocard__thumbnail" src={image} alt="" />
      <div className="videocard__info">
        <Avatar className="videocard__avatar" alt={channel} src={channelImage} />
        <div className="videocard__text">
          <h4 className="videocard__title">{title}</h4>
          <p className="videocard__details">{channel}</p>
          <p className="videocard__details">
            {views} • {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
