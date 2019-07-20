import  React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


function Footer(){
    return( 
    <FooterContainer  className="main-footer">
   <div className="footer-middle">
    <div class="container">
    <div className="row">
            {/* COLUMN 1 */}
    <div class="col-md-3 col-sm-6">
    <h5>Our Services</h5>
    <ul className="list-unstyled">       
     <Link to="/">   <li>Home</li></Link>
      <Link to="/news">  <li>Travel News</li></Link>
      <Link to="/contacts" > <li>Contact Us</li></Link>
      <Link to="/news">  <li>Latest</li></Link>
    </ul>
    </div>
       {/* COLUMN 2 */}
    <div class="col-md-3 col-sm-6">
    <h5>Social Activities</h5>
    <ul className="list-unstyled">
      <li>
      <a href="https://www.facebook.com/neelum.valley786/"> <i style={{color: '#0083B0'}}className="fa fa-facebook-f" /></a>
      </li>
      <li>
      <i style={{color: '#E94057'}}className="fa fa-instagram" />  
      </li>        
      <li>
      <i className="fa fa-map-marker" aria-hidden="true" />
      </li>    
   
    </ul>
    </div>
    {/* COLUMN 3 */}
    <div class="col-md-3 col-sm-6">
    <h5>Our Mission</h5>
    <ul className="list-unstyled">
      
    <p className="text-justify">To inspire active participation in the world outside through award-winning coverage of the sports, people, places, adventure, discoveries, health and fitness, gear and apparel, trends and events that make up an active lifestyle.
    </p>
    </ul>
    </div>
    {/* COLUMN 4 */}
    <div class="col-md-3 col-sm-6">
    <h5>About Us</h5>
    <ul className="list-unstyled">
        <p className="text-justify">Whether you call it a website builder, creator or maker, we can help you pick the best one foryour business website.
        </p>
        <h5 style={{fontSize: '1.3rem'}}>Phone No: +92 3350156479</h5>
      
        <h5 style={{fontSize: '1.3rem'}}>Email:hasnainsaleem2233@gmail.com</h5>
        
    </ul>
    </div>
    </div>
        {/* FOOTER BOTTOM */}
        <div className="footer-bottom">
         <p className="text-xs-center">
        &copy;{new Date().getFullYear()} City Guide App - All Rights
         Reserved
       
       </p>
        </div>
    </div>  
    </div>
    
    </FooterContainer >


    );
}

export default Footer;


const FooterContainer = styled.footer`
   .footer-middle {
       background: var(--mainDark);
       padding-top: 3rem;
       color: var(--mainWhite);
       font-size: 1.2em;
          }
          h4{
              font-size: 2em;
          }
  .footer-bottom{
      padding-top: 3rem;
      padding-bottom: 2rem;
      font-size: 1em;
  }          
  ul li {
    coursor: pointer;
      color: var(--mainWhite);
  }
  li:hover {
cursor: pointer;
color: var(--mainBlack);

}
 
  i {
    font-size: 3.875rem;
    color: var(--mainWhite);
  }
  i:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
  h5:hover{
      color: var(--mainBlue);
  }
 
`;
 