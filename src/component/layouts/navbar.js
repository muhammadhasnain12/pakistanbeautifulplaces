import React from 'react';

import Logo from '../../logo1.png';
import {Link} from 'react-router-dom';

function navbar(){
    return(
      <div style={{marginLeft:'60px', marginRight: '60px'}}> 
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <a className="navbar-brand ml-5" href="{#}">
   <img src={Logo} alt="Logo" style={{ width: '53px'}} />
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 {/* <span className="navbar-toggler-icon" /> */}
    <span>
      <i className="fa fa-bars" style={{ color: '#fff'}} />
      </span>
  </button>
  
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav m-auto">
      <li className="nav-item active">
        <Link className="nav-link text-white text-uppercase ml-5" to="/">
        Home&nbsp;
        <i className="fa fa-home" /> 
        <span className="sr-only">(current)</span>
        </Link>
          
      </li>
      
      <li className="nav-item">
        <Link className="nav-link text-white text-uppercase ml-5" to="/news">
        news
        </Link>
      </li> 
      <li className="nav-item">
        <Link className="nav-link text-white text-uppercase ml-5" to="/contacts">
        Contact us
        </Link>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <Link to="/">
      <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
           </Link>
    </form>
  </div>
</nav>    
</div>
    );
}


export default navbar;