/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useParams } from 'react-router-dom';
// import { menuItems } from '../../Appconstant';
import '../layouts/Latest/Latest.scss';
import './DashBoard.scss'
// import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useEffect,useState } from 'react';
import { ScanAppService } from '../../services/ScanAppService';
import { Button } from 'react-bootstrap';
// import { menuItems } from '../../../Appconstant';
export const DashBoard = () => {
  const {tenant} = useParams()
  const [menuItems , setMenuItems] = useState<any>([])
  const fetchData = async ()=>{
    try {

      const res = await ScanAppService.getItems()

      console.log("res", res)
      setMenuItems(res.data.data)
      // Frame the formData object based on the form field values
    } catch (error) {
      console.error("Error posting or updating data:", error);
      // Handle errors while posting or updating data
    }
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div className='Latest minHeight'>
        
        <section className="section menu" id="menu">
        <div className="menu-container container">
          <div className="menu-content">
            <div className="menu-items">
              {menuItems.slice(0,5).map((menuItem:any, index:any) => (
                <div className="menu-item flex" key={index}>
                  <img src={menuItem.url} alt="" className="menu-img" />
                  <div className="menuItem-details">
                    <h6 className="menuItem-topic">{menuItem.name}</h6>
                    <p className="menuItem-des">{menuItem.name}</p>
                    <div className='spice'>
                      {[...Array(menuItem.spiceLevel)].map((_, index) => (
                        <img key={index} src='https://h-app-scanner.s3.ap-southeast-2.amazonaws.com/img/chilli.png' alt='hi'/>
                      ))}
                    </div>
                  </div>
                  <div className="menuItem-price flex">
                    <span className="discount-price">{menuItem.item_price}{menuItem.currency_code}</span>
                    <span className="real-price">{menuItem.promotional_price}{menuItem.currency_code}</span>
                  </div>
                </div>
              ))}
            </div>
</div>
        </div>
        <div>
       
        <div className="buttonWrapperr">
        <Link to={`/${tenant}/tenantLogin`}><div className='backArrow'><ArrowBackIcon /></div></Link>
        <Link to={`/${tenant}/addItems`}>
          <Button variant="contained">
            {/* <AddIcon/> */}
            Add Items
          </Button>
        </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
