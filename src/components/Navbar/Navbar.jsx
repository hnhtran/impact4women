import './NavBar.css'
import { Navbar } from 'reactstrap'

export const NavBar = () => {
  return (
    <Navbar className='nav'>
        <img src="impactLogo.png" alt="impact logo" className='Logo'/>
        <div className="userinfo">
        Alan Samuels
        <img src='usericonOG.png' className="profilePicture" alt=""/>
        </div>
    </Navbar>
  )
}
