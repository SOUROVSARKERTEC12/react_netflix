import React from 'react';
import './watch.scss'
import {ArrowBackOutlined} from "@material-ui/icons";
const Watch = () => {
    return (
        <div className="watch">
            <div className="back">
                <ArrowBackOutlined/>
                Home
            </div>
            <video
                className="video"
                autoPlay
                progress
                controls
                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
            />
        </div>
    );
};

export default Watch;