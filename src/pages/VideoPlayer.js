import React from 'react';

const VideoPlayer = () => {
    return (
        <div>
            <h1>Video Player</h1>
            <video width="600" controls>
                <source src="your-video-source.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div>
                <h2>Comments</h2>
                <ul>
                    <li>Comment 1</li>
                    <li>Comment 2</li>
                </ul>
                <input type="text" placeholder="Add a comment" />
                <button>Add Comment</button>
            </div>
        </div>
    );
};

export default VideoPlayer;