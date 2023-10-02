import React, { useState } from "react";
import "./qualifications.css";
import img1 from '../props/freefire.jpg';
import img2 from '../props/fortnite.png';
import img3 from '../props/apex-legends.jpg';
import img4 from '../props/pubg.png';
import img5 from '../props/garena-logo.jpg';
import img6 from '../props/cod-ghost.jpg';
import video2 from '../props/ff-vid.mp4';
import video1 from '../props/pubg-vid.mp4';
import video3 from '../props/cod.mp4';
import video4 from '../props/fortnite-vid.mp4';
const Qualification = ({ type, media, title, description }) => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="qualification" onClick={togglePopup}>
      <div className="content">
        {type === "image" ? (
          <img src={media} alt={title} />
        ) : (
          <video controls>
            <source src={media} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
      <h1>{title}</h1>
      <p>{description}</p>

      {showPopup && (
        <div className="popup">
          {type === "image" ? (
            <img src={media} alt={title} />
          ) : (
            <video controls>
              <source src={media} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          <button className="close-button" onClick={togglePopup}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

const Qualifications = () => {
  return (
    <div>
      <h1 className="quali-text">Streams And Image Gallery</h1>
      <div className="qualifications-container">
        <Qualification
          type="image"
          media={img1}
         
        />
        <Qualification
          type="image"
          media={img2}
         
        />
        <Qualification
          type="image"
          media={img3}
         
        />
        <Qualification
          type="image"
          media={img4}
         
        />
        <Qualification
          type="image"
          media={img5}
         
        />
        <Qualification
          type="image"
          media={img6}
         
        />
        <Qualification
          type="video"
          media={video2}
        
        />
        <Qualification
          type="video"
          media={video1}
         
        />
        <Qualification
          type="video"
          media={video3}
         
        />
      
        {/* Add more Qualification components for additional images and videos */}
      </div>
    </div>
  );
};

export default Qualifications;
