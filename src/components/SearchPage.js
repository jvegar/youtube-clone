import React from "react";
import "./SearchPage.css";
import TuneIcon from "@material-ui/icons/Tune";
import ChannelRow from "./ChannelRow";
import VideoRow  from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneIcon />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://yt3.ggpht.com/ytc/AKedOLSxyKH5r8KiDFbY6I8Z-dgbVm_8zh4n3C2KQy9Vog=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="Tibees"
        verified
        subs="659K"
        noOfVideos={382}
        description="Hi, I'm Toby, on my channel you can expect to see videos about physics, math, astronomy and the history of science. 
        If you like my channel then please help me out by sharing one of my videos with a friend. You can also support me through Patreon or Ko-fi (links below). I really appreciate it :)
        Please visit my website for FAQs and contact information https://tobyhendy.com/        
        Thanks for stopping by and I hope you have a |mathematical| day :)"
      />

      <hr/>

      <VideoRow
      views="1.2M"
      subs="120K"
      description="You are what you eat, and I'm an ass."
      timestamp="3 days ago"
      channel="Joma in NYC"
      title="what I eat in a day | living alone in nyc"
      image="https://i.ytimg.com/vi/C0f2pu0EVSg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDqibHa4gIdE2ZjbMWkexFu4wiiPQ"
      />
    </div>
  );
}

export default SearchPage;
