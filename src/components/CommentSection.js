import React, { useState } from 'react';

const CommentSection = () => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    const handleCommentChange = (e) => {
        setNewComment(e.target.value);
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (newComment) {
            setComments([...comments, newComment]);
            setNewComment('');
        }
    };

    return (
        <div>
            <h2>Comments</h2>
            <div>
                {comments.map((comment, index) => (
                    <div key={index}>{comment}</div>
                ))}
            </div>
            <form onSubmit={handleCommentSubmit}>
                <input 
                    type="text" 
                    value={newComment} 
                    onChange={handleCommentChange} 
                    placeholder="Add a comment..." 
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default CommentSection;