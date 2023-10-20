/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from 'react-bootstrap'
// import { ImageSlider } from '../Slider/ImageSlider'
import { Link } from 'react-router-dom';
import './Home.scss'
import './../Slider/ImageSlider.scss'
import { profile } from '../../Appconstant';
import  { useState, useEffect } from "react";
export const Home = () => {


  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const currentProfile = profile[currentImageIndex];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === profile.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change this value to adjust the interval time

    return () => clearInterval(interval);
  }, []);
  return (
    <div className='Home'>
     <div className='imgWrapper'>
        <div className='imageStyles'>
      {/* <img  src='./../../../public/img/hero-bg.png'/> */}
      <div className="slider">
      <div
        className="slides"
        style={{
          transform: `translateX(${-currentImageIndex * 100}%)`,
          transition: "transform 0.5s ease"
        }}
      >
        {profile.map((image:any, index:any) => (
          <div key={index} className="slide">
            <img src={image.img} alt={`slider-${index}`} />
          </div>
        ))}
      </div>
      <div className="dash-container">
        {profile.map((_:any, index:any) => (
          <div
            key={index}
            className={`dash ${index === currentImageIndex ? "active" : ""}`}
          />
          
        ))}
      </div>
    </div>
      {/* <ImageSlider data={profile}/> */}
      </div>
      <div className='description'>
              <h3 className='firstH3'>Great Taste ,</h3>
      <h3>great Sensation</h3>
      <p>{currentProfile.text} </p>
      </div>
      </div>
      <div className='buttonWrapper'>
     <Link to ="/latest"> <Button variant="contained">Show Items</Button></Link>
      </div>
    </div>
  )
}
