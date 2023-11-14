import { Link } from 'react-router-dom';
import { menuItems } from '../../Appconstant';
import '../layouts/Latest/Latest.scss';
import './DashBoard.scss'
import { Button } from 'react-bootstrap';
import AddIcon from '@mui/icons-material/Add';

export const DashBoard = () => {
  return (
    <div className='Latest'>
        
      <section className="section menu" id="menu">
      
        <div className="menu-container container">
       
          <div className="menu-content">
            <div className="menu-items">
              {menuItems.slice(1,4).map((menuItem, index) => (
                <div className="menu-item flex" key={index}>
                  <img src={menuItem.imgSrc} alt="" className="menu-img" />
                  <div className="menuItem-details">
                    <h6 className="menuItem-topic">{menuItem.itemName}</h6>
                    <p className="menuItem-des">{menuItem.itemDescription}</p>
                    <div className='spice'>
                      {[...Array(menuItem.spiceLevel)].map((_, index) => (
                        <img key={index} src='https://h-app-scanner.s3.ap-southeast-2.amazonaws.com/img/chilli.png' alt='hi'/>
                      ))}
                    </div>
                  </div>
                  <div className="menuItem-price flex">
                    <span className="discount-price">{menuItem.discountPrice}</span>
                    <span className="real-price">{menuItem.realPrice}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="buttonWrapperr">
        <Link to="/addItems">
          <Button variant="contained">
            <AddIcon/>
          </Button>
        </Link>
      </div>
      </section>
    </div>
  );
};
