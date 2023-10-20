import { Button } from 'react-bootstrap'
import { ImageSlider } from '../Slider/ImageSlider'
import { Link } from 'react-router-dom';
import './Home.scss'
export const Home = () => {
  return (
    <div className='Home'>
     <div className='imgWrapper'>
        <div className='imageStyles'>
      {/* <img  src='./../../../public/img/hero-bg.png'/> */}
      <ImageSlider/>
      </div>
      <div className='description'>
      <h3 className='firstH3'>Great Taste ,</h3>
      <h3>great Sensation</h3>
      <p>Use the online image color picker above to select a color and get the HTML Color Code of this pixel. </p>
      </div>
      </div>
      <div className='buttonWrapper'>
     <Link to ="/latest"> <Button variant="contained">Show Items</Button></Link>
      </div>
    </div>
  )
}
