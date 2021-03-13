import React from "react";
import "./VideoRow.scss";

function VideoRow({ views, subs, description, timestamp, channel, title, image }) {
  return (
    <div className="videorow">
      <img className="videorow__image" src={image} alt={channel} />
      <div className="videorow__text">
        <h3 className="videorow__title">{title}</h3>
        <p className="videorow__headline">
          {channel} •{" "}
          <span className="videorow__subs">
            <span className="videorow__subs-number">{subs}</span> Subscribers
          </span>{" "}
          {views} views • {timestamp}
        </p>
        <p className="videorow__details">{description}</p>
      </div>
    </div>
  );
}

export default VideoRow;
