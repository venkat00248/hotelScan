/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "react-bootstrap";
// import { ImageSlider } from '../Slider/ImageSlider'
import { Link } from "react-router-dom";
import "./Home.scss";
import "./../Slider/ImageSlider.scss";
// import { profile } from "../../Appconstant";
import { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";


import DetailedView from "./DetailedView";
import { useFormData } from "../Items/stateManagement/FormDataContext";
import { ScanAppService } from "../../services/ScanAppService";

export const Home = () => {
const { setOpen,
   setIndexedImage } = useFormData()
 
  const handleClickOpen = (index:number) => {
    setIndexedImage(index);
    setOpen(true);
  };
  const [profile , setProfile]= useState([])
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const currentProfile:any = profile[currentImageIndex];
  console.log("current", currentProfile)
  const handleDashClick = (index: number) => {
    setCurrentImageIndex(index);
  }
  const fetchData = async ()=>{
    try {

      const res = await ScanAppService.getItems()

      console.log("res", res)
      setProfile(res.data)
      // Frame the formData object based on the form field values
    } catch (error) {
      console.error("Error posting or updating data:", error);
      // Handle errors while posting or updating data
    }
  }
  useEffect(() => {
    fetchData()
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === profile.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change this value to adjust the interval time

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="Home">
      <div className="imgWrapper">
        <div className="imageStyles">
          {/* <img  src='./../../../public/img/hero-bg.png'/> */}
          <div className="slider">
            <div
              className="slides"
              style={{
                transform: `translateX(${-currentImageIndex * 100}%)`,
                transition:
                  currentImageIndex === 0 ? "none" : "transform 0.5s ease",
              }}
            >
              {profile.map((image: any, index: any) => (
                <div key={index} className="slide" onClick={()=>handleClickOpen(index)}>
                  <img src={image.url} alt={`slider-${index}`} />
                </div>
              ))}
            </div>
            <div className="dash-container">
              {profile.map((_: any, index: any) => (
                <div
                  key={index}
                  onClick={() => handleDashClick(index)}
                  className={`dash ${
                    index === currentImageIndex ? "active" : ""
                  }`}
                />
              ))}
            </div>
          </div>
          {/* <ImageSlider data={profile}/> */}
        </div>
        <div className="description">
          <h3 className="firstH3">Great Taste ,</h3>
          <h3>great Sensation</h3>
          <p>{currentProfile && currentProfile.title} </p>
        </div>
      </div>
      <div className="buttonWrapper">
        <Link to="/latest">
          {" "}
          <Button variant="contained">
            {" "}
            <MenuIcon /> Items{" "}
          </Button>
        </Link>
      </div>
      <DetailedView/>
    </div>
  );
};
