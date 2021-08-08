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
      views="52K"
      subs="692K"
      description="Timestamps: 0:00 - Intro 1:18 - A look at the questions 4:35 - My solutions to Q2 9:16 - Patron Cat of the Day."
      timestamp="3 days ago"
      channel="Tibees"
      title="INSANE exam questions from the University of Tokyo"
      image="https://i.ytimg.com/vi/kh8bySuvuxE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDLIIFT9Ne6Vipr-bUQc23qLgdV1w"
      />
      <VideoRow
      views="68K"
      subs="120K"
      description="This video is sponsored by Brilliant."
      timestamp="1 week ago"
      channel="Tibees"
      title="Trying to read the books Terence Tao read as a child"
      image="https://i.ytimg.com/vi/RoObJcYpwZE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDFg727vWdZ5m6fKHnMd3ZYcao8Nw"
      />
      <VideoRow
      views="629K"
      subs="120K"
      description="The full report (PDF): http://math.fau.edu/yiu/Oldwebsites/MPS2010/TerenceTao1984.pdf Terence did note in his answers that ..."
      timestamp="3 weeks ago"
      channel="Tibees"
      title="The Test That Terence Tao Aced at Age 7"
      image="https://i.ytimg.com/vi/I_IFTN2Toak/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBWxRSLqwFkAHlqasdOuYNV0XO4fA"
      />
      <VideoRow
      views="1.5M"
      subs="120K"
      description="Ramanujan was a self-taught Indian mathematician who travelled to England to work with professor G H Hardy after sending him ..."
      timestamp="11 months ago"
      channel="Tibees"
      title="The letter that revealed Ramanujan's genius"
      image="https://i.ytimg.com/vi/XFsuRxospbU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLALUwr00PL2cjXXzZKieQ-podwzFw"
      />
    </div>
  );
}

export default SearchPage;
