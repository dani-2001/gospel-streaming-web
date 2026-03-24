import React from 'react';

const VideoCard = ({ title, description, thumbnail, url }) => {
    return (
        <div className="video-card">
            <a href={url} target="_blank" rel="noopener noreferrer">
                <img src={thumbnail} alt={title} className="video-thumbnail" />
                <h3 className="video-title">{title}</h3>
                <p className="video-description">{description}</p>
            </a>
        </div>
    );
};

export default VideoCard;