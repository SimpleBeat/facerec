import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageURL }) => {
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                <img src={imageURL} alt='data' width='400px' height='auto' />
            </div>
        </div>
    )
}

export default FaceRecognition;