import React from "react";
import "./Header.css"

class Header extends React.Component {
    render() {
      return(
          <div className="head">
            
             <h1 className="head__title"><span class="head__title__logo">Google</span> Fonts</h1>

             <nav className="head__navigation">
                <a href= "#" className="head__navigation__link">CATALOG </a>
                <a href= "#" className="head__navigation__link">FEATURED</a>
                <a href= "#" className="head__navigation__link">ARTICLES</a>
                <a href= "#" className="head__navigation__link">ABOUT</a>
             </nav>

             

             </div>
          
          )
    }
  }

  export default Header;
