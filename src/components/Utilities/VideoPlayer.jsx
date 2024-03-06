"use client"

import Youtube from "react-youtube"
import {  XCircle } from "@phosphor-icons/react"

const VideoPlayer = ({ youtubeId }) => {
    const option = {
        width: "300",
        height:"250"
    }
    return (
        <div className="fixed bottom-0 right-0">
            <button><XCircle size={32}/></button>
            <Youtube videoId={youtubeId} 
            onReady={(event) => event.target.pauseVideo() }
            opts={option}
            />
        </div>
    )
}

export default VideoPlayer