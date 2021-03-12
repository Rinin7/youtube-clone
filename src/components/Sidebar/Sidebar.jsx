import React from "react";
import "./Sidebar.scss";
import SidebarRow from "../SidebarRow/SidebarRow";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAlt";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMore";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__main">
        <SidebarRow selected Icon={HomeIcon} title="Home" />
        <SidebarRow Icon={WhatshotIcon} title="Trending" />
        <SidebarRow Icon={SubscriptionsIcon} title="Subscription" />
      </div>
      <div className="sidebar__personalized">
        <SidebarRow Icon={VideoLibraryIcon} title="Library" />
        <SidebarRow Icon={HistoryIcon} title="History" />
        <SidebarRow Icon={OndemandVideoIcon} title="Your movies" />
        <SidebarRow Icon={WatchLaterIcon} title="Watch later" />
        <SidebarRow Icon={ThumbUpAltOutlinedIcon} title="Liked videos" />
        <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show more" />
      </div>
    </div>
  );
}

export default Sidebar;
