import React from 'react';

const Upload = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const file = event.target.fileInput.files[0];
        // Handle the file upload logic here
        console.log('File uploaded:', file);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Upload Video:
                <input type="file" name="fileInput" accept="video/*" required />
            </label>
            <button type="submit">Upload</button>
        </form>
    );
};

export default Upload;