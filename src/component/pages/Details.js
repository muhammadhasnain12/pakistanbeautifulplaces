import React, { Component } from 'react';
import { InfoConsumer } from '../context';
import styled from 'styled-components';
import Reviews from '../Reviews';
import Iframe from 'react-iframe'


class Details extends Component {
  render() {
    return (
      <InfoConsumer>
        {data => {
          const {
            // id,
            headerTitle,
            headerSubTitle,
            headerText,
            img,
            title,
            maps,
            description
          } = data.detailInfo;

          return (
            <React.Fragment>
              <HeaderDetails className="conteiner-fluid align-items-center">
                <h1 className="display-1 font-weight-bold">{headerTitle}</h1>
                <h4 className="display-5">{headerSubTitle}</h4>
                <p style={{fontSize: '15px'}}>{headerText}</p>

                                       {/* Social Icons */}
                 
                  <div className="container mt-5">
                  <div className="row justify-content-center">
                    <div className="col-2">
                    <a href="https://www.facebook.com/neelum.valley786/"> <i className="fa fa-facebook-f" /></a>
                    </div>
                    <div className="col-2">
                      <i className="fa fa-twitter" />
                    </div>
                    <div className="col-2">
                      <i className="fa fa-google-plus" />
                    </div>
                    <div className="col-2">
                      <i className="fa fa-reddit" />
                    </div>
                    <div className="col-2">
                      <i className="fa fa-map-marker" aria-hidden="true" />
                    </div>
                    <div className="col-2">
                      <i className="fa fa-instagram" />
                    </div>
                  </div>
                </div>
              </HeaderDetails>
                                            {/* Nav Link */}
             
              <div className="container">
                <ul className="nav nav-tabs">
                  {/* About Place Link */}
                  <li className="nav-item">
                    <a
                      href="#aboutPlace" className="nav-link active"  role="tab"  data-toggle="tab" style={{fontSize: '15px'}}>
                      About Place
                    </a>
                  </li>
                  
                                             {/* Reviews Link */}
                 
                  <li className="nav-item">
                    <a
                      href="#reviews" className="nav-link" role="tab" data-toggle="tab" style={{fontSize: '15px'}}>
                      Reviews
                    </a>
                  </li>
                  
                                                {/* Map Link */}
                  
                   <li className="nav-item">
                    <a
                      href="#map"className="nav-link" role="tab" data-toggle="tab" style={{fontSize: '15px'}}>
                      Map </a>
                  </li>
                </ul>
                                              
                                              {/* Tab Pane */}

                <div className="tab-content mb-5">
                                         
                                          {/* About Place Tab */}
                  <div
                    id="aboutPlace"
                    className="tab-pane in active text-center mt-5"  role="tabpanel" >
                    <h2 className="mb-3">{title}</h2>
                    <p style={{fontSize: '15px'}}>{description}</p>
                    <img
                      src={img}
                      alt={title}
                      className="img-thumbnail img-fluid"
                    />
                  </div>
                                          
                                           {/* Reviews */}

                  <div className="tab-pane" id="reviews" role="tabpanel">
                    <Reviews />
                  </div>
                  {/* Map */}
                  <div className="tab-pane" id="map" role="tabpanel">
                    < Iframe  src={maps}  style={{  border: '0', height: '28.125rem',  width: '100%', frameborder: '0' }} />
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        }}
      </InfoConsumer>
    );
  }
}

export default Details;

const HeaderDetails = styled.header`
  background: linear-gradient(rgba(109, 109, 109), rgba(255, 255, 255));
  height: 100vh;
  text-transform: uppercase;
  // color: var(--mainWhite);
  text-align: center;
  h1 {
    padding-top: 10%;
    // color: var(--mainBlue);
    color: black;
  }
  h4 {
    // color: var(--mainBlue);
    color: black;
  }
  p {
    padding-left: 10%;
    padding-right: 10%;
    margin-bottom: 10%;
    // color: var(--mainBlue);
    color: darkblack;
    fontSize:  40px; 
  }
  i {
    font-size: 3.875rem;
    // color: var(--mainDark);
    color: black;
  }
  i:hover {
    color: var(--mainBlue);
    // color: black;
    cursor: pointer;
  }
  .nav-item {
    height: 22.75rem;
    width: 500px;
  }
  @media (max-width: 760px) {
    h1,
    h4 {
      color: var(--mainWhite);
      color: black;
    }
  }
`;