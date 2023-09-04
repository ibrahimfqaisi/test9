import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';
// import icon from '../styles/icon.module.css'
const HeaderWithVideo = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="header-container">
            <header>
                <div
                    className="image-overlay"
                    onClick={() => setIsOpen(true)} // Open the video when the image is clicked
                >
                    <img
                        src="/images/about_banner_720.png"
                        alt="Header Image"
                        className="header-image" // Add a local class to the img element
                        style={{ width: '100%' }}
                    />
                </div>
            </header>
            <ModalVideo
                channel="youtube"
                isOpen={isOpen}
                videoId="E2l4RSeZ_tU" // Replace with your YouTube video ID
                onClose={() => setIsOpen(false)}
            />
        </div>
    );
};
export default HeaderWithVideo;