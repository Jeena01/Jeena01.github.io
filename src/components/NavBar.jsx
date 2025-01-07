import "../App.css"
import "./NavBar.css"
import { useState } from "react";
import Menu  from "@mui/icons-material/Menu";

function NavBar(){
    
const [menuOpen,setMenuOpen]=useState(false);

    return (
        <nav className="NavBar">
            <a className="title" style={{fontSize:'40px'}} href="/">Portfolio</a>
            <div className="menu">
                <Menu className="menuBtn" onClick={()=>setMenuOpen(!menuOpen)}/>
                <ul className={menuOpen? "menuItems menuOpen": "menuItems"}>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                            <a href="#experience">Experience</a>
                    </li>
                    <li>
                            <a href ="#projects">Projects</a>

                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default NavBar;