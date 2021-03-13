import React from "react";
import "./ChannelRow.scss";
import Avatar from "@material-ui/core/Avatar";
import VerifiedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";

function ChannelRow({ image, channel, verified, subs, noOfVideos, description }) {
  return (
    <div className="channelrow">
      <Avatar className="channelrow__logo" alt={channel} src={image} />
      <div className="channelrow__text">
        <h4 className="channelrow__name">
          {channel} {verified && <VerifiedIcon className="channelrow__verified" />}
        </h4>
        <p className="channelrow__details">
          {subs} subscribers • {noOfVideos} videos
        </p>
        <p className="channelrow__details">{description}</p>
      </div>
    </div>
  );
}

export default ChannelRow;
