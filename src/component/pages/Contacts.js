import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Iframe from 'react-iframe';


class Contacts extends Component {
  render() {
    return (
      <section className="my-5 py-5">
        <div className="container">
          <div className="well well-sm">
            <h3>
              <strong>Our Location</strong>
            </h3>
          </div>

          <div className="row">
            <div className="col-md-7">
              <Iframe src="https://www.google.com/maps/d/embed?mid=1YWR9bobQPVZ2lwB-cHUoIPSxLZ2Z1rIK"
         style={{ border: '0',  width: '100%', height: '315px', frameborder: '0' }} allowFullscreen />
            </div>
            <div className="col-md-5">
              <h4>
                <strong>Contact Us</strong>
              </h4>
              <form>
                <div className="form-group">
                  <input  type="text" className="form-control"  placeholder="Name" />
                </div>
                <div className="form-group">
                  <input type="email" className="form-control" placeholder="Email" />
                </div>
                <div className="form-group">
                  <input type="tel" className="form-control"placeholder="Phone" />
                </div>
                <textarea className="form-control" cols="30" rows="3" placeholder="Message" />
                {/* fb comment section */}
                {/* <div id="fb-root"></div>
               <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v3.3"></script>
                            {/* step 2 fb plugin section */} 
                       {/* <div class="fb-comments" data-href="http://localhost:3000/contacts" data-width="" data-numposts="10"></div> */} 

                <Link className="btn btn-outline-primary text-uppercase mt-1">
                  <i className="fa fa-paper-plane-o" aria-hidden="true" />
                  <i className="fa fa-telegram-plane" />
                  &nbsp;Send
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contacts;