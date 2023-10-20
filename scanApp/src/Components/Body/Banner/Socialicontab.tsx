/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { socialicons } from '../../Appconstant'
import Icon from '../../Reuseable/Icon/Icon'
import Mappedarray from '../Mappedarray/Mappedarray'

function Socialicontab(){

  const socialiconsrow = <Mappedarray array={socialicons}>
     {({prop}:any)=>(
     <a href={prop.link} target='__blank'>
        <Icon icon={prop.icon+' socialicon'}/>
     </a>
    )}
  </Mappedarray>

  return <div className="socialicontab">
    {socialiconsrow}
  </div>
}
export default Socialicontab