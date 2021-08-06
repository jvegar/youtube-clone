import React from 'react'
import './RecommendedVideos.css'
import VideoCard from './VideoCard'

function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideos__videos">
                <VideoCard 
                title="The Test That Terence Tao Aced at Age 7"
                channel="Tibees"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLSxyKH5r8KiDFbY6I8Z-dgbVm_8zh4n3C2KQy9Vog=s68-c-k-c0x00ffffff-no-rj"
                image="https://i.ytimg.com/vi/I_IFTN2Toak/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBWxRSLqwFkAHlqasdOuYNV0XO4fA"
                views="574 views"
                timestamp="3 weeks ago"
                />
                <VideoCard 
                title="A DAY in the LIFE of the DATA CENTRE | FULL CUSTOMER RACK & STACK with ASH & JAMES!"
                channel="Custodian Data Centres"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLQFuHXU7mOZ1ZsCOXN6kJjg1aJNZ7hMunB_b-_RdQ=s68-c-k-c0x00ffffff-no-rj"
                image="https://i.ytimg.com/vi/pLBYulLueQo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC9KQ8En7OFhE0juOoB2ume5avCIg"
                views="657,259 views"
                timestamp="1 year ago"
                />
                <VideoCard 
                title="Inside Japan's SLEEPER Train | $160 FIRST CLASS Room"
                channel="Abroad in Japan"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLSgJFl3EGi9Drdygb6-FCV92O_nxWbe4Tf_E8gqdZw=s68-c-k-c0x00ffffff-no-rj"
                image="https://i.ytimg.com/vi/aVT0BvWZcLg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDxChciHFJ8OTy0f2-ry_h_Sijqrg"
                views="1.5M views"
                timestamp="1 week ago"
                />
                <VideoCard 
                title="Coding Interview | Software Engineer @ Bloomberg (Part 1)"
                channel="Keep On Coding"
                channelImage="https://i.ytimg.com/vi/jma9hFQSCDk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCShYRzjaxW4l1kPbPUguWec2zNig"
                image="https://i.ytimg.com/vi/jma9hFQSCDk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCShYRzjaxW4l1kPbPUguWec2zNig"
                views="1.3M views"
                timestamp="2 years ago"
                />
                <VideoCard 
                title="The Test That Terence Tao Aced at Age 7"
                channel="Tibees"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLSxyKH5r8KiDFbY6I8Z-dgbVm_8zh4n3C2KQy9Vog=s68-c-k-c0x00ffffff-no-rj"
                image="https://i.ytimg.com/vi/I_IFTN2Toak/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBWxRSLqwFkAHlqasdOuYNV0XO4fA"
                views="574 views"
                timestamp="3 weeks ago"
                />
                <VideoCard 
                title="A DAY in the LIFE of the DATA CENTRE | FULL CUSTOMER RACK & STACK with ASH & JAMES!"
                channel="Custodian Data Centres"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLQFuHXU7mOZ1ZsCOXN6kJjg1aJNZ7hMunB_b-_RdQ=s68-c-k-c0x00ffffff-no-rj"
                image="https://i.ytimg.com/vi/pLBYulLueQo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC9KQ8En7OFhE0juOoB2ume5avCIg"
                views="657,259 views"
                timestamp="1 year ago"
                />
                <VideoCard 
                title="Inside Japan's SLEEPER Train | $160 FIRST CLASS Room"
                channel="Abroad in Japan"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLSgJFl3EGi9Drdygb6-FCV92O_nxWbe4Tf_E8gqdZw=s68-c-k-c0x00ffffff-no-rj"
                image="https://i.ytimg.com/vi/aVT0BvWZcLg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDxChciHFJ8OTy0f2-ry_h_Sijqrg"
                views="1.5M views"
                timestamp="1 week ago"
                />
                <VideoCard 
                title="Coding Interview | Software Engineer @ Bloomberg (Part 1)"
                channel="Keep On Coding"
                channelImage="https://i.ytimg.com/vi/jma9hFQSCDk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCShYRzjaxW4l1kPbPUguWec2zNig"
                image="https://i.ytimg.com/vi/jma9hFQSCDk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCShYRzjaxW4l1kPbPUguWec2zNig"
                views="1.3M views"
                timestamp="2 years ago"
                />
            </div>
    
        </div>
    )
}

export default RecommendedVideos
