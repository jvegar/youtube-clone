import React from 'react'
import SidebarRow from './SidebarRow'
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './Sidebar.css'
function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow selected icon={HomeIcon} title="Home"/>
            <SidebarRow icon={WhatshotIcon} title="Trending"/>
            <SidebarRow icon={SubscriptionsIcon} title="Subscriptions"/>
            <hr/>
            <SidebarRow icon={VideoLibraryIcon} title="Library"/>
            <SidebarRow icon={HistoryIcon} title="History"/>
            <SidebarRow icon={OndemandVideoIcon} title="Your videos"/>
            <SidebarRow icon={WatchLaterIcon} title="Watch later"/>
            <SidebarRow icon={ThumbUpAltIcon} title="Liked videos"/>
            <SidebarRow icon={ExpandMoreIcon} title="Show more"/>
            <hr/>
        </div>
    )
}

export default Sidebar
