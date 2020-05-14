import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageURL }) => {
    return (
        <div className='center imageContainer'>
            <img src={imageURL} alt='data' />
        </div>
    )
}

export default FaceRecognition;