import { services } from '../../Appconstant'
import Card from '../../Reuseable/Card/Card'
import './Featuressection.css'
function Servicessection () {
  const servicesrow = services?.map(service=>{
    return <Card card={service} themeshadow={true}/>
  })

  return (
    <div className="featuressection">
       <div className="header">
         <h2>Features</h2>
       </div>
       <div className="cardscontainer">
          {servicesrow}
       </div>
    </div>
  )
}
export default Servicessection