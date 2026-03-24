import React, { useState } from 'react';

const LikeButton = () => {
    const [isLiked, setIsLiked] = useState(false);

    const handleLikeToggle = () => {
        setIsLiked(!isLiked);
    };

    return (
        <button onClick={handleLikeToggle}>
            {isLiked ? 'Unlike' : 'Like'}
        </button>
    );
};

export default LikeButton;