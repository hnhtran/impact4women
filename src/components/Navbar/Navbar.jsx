import './NavBar.css'
import { Navbar } from 'reactstrap'

export const NavBar = () => {
  return (
    <Navbar className='nav'>
        <img src="impactLogo.png" alt="impact logo" className='Logo'/>
        
        <img src='usericonOG.png' className="profilePicture" alt=""/>
    </Navbar>
  )
}
