import './navbar.css'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { useState } from 'react'

const Navbar = () => {

   const [showLinks, setShowLinks] = useState(false)

  return (
    <header className="header">

         <a href="#"><h1 style={{"color": "#111"}}>Logo</h1></a>

        <nav className={`nav${showLinks  ? " actived" : ""}`}>
          <button aria-haspopup="true" aria-label={showLinks ? "Fechar menu" : "Abrir menu"} className='btn-mobile' onClick={() => setShowLinks(!showLinks)} >{showLinks ? <AiOutlineClose></AiOutlineClose> : <AiOutlineMenu></AiOutlineMenu>}</button>

         <ul className='menu' role="menu">  
            <li>
               <a href="#" >Teste</a>
            </li>

            <li>
               <a href="#">Home</a>
               </li>

            <li>
               <a href="#">Sobre</a>
            </li> 
         </ul>
        </nav>

    </header>
  )
}

export default Navbar