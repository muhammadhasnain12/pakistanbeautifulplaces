import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/layouts/navbar';
import Footer from './component/layouts/footer';
import Carousal from './component/layouts/carousal';
             // REACT ROUTER IMPORT
import { Switch, Route } from 'react-router-dom';
               //  IMPORT PAGES  
  // import Home from './component/pages/Home';
  import Home from './component/pages/Home';
  import News from './component/pages/News';
  import Contacts from './component/pages/Contacts';
  import Details from './component/pages/Details';
  import NotFoundpage from './component/pages/Notfoundpage';
  

class App extends Component{
      render(){
        return(
           <div>
          <Navbar />
          <Carousal />
           <Switch >
             <Route exact path="/" component={Home}/>
             <Route path="/news" component={News}/>
             <Route path="/contacts" component={Contacts}/>
             <Route path="/details" component={Details}/>
             <Route  component={NotFoundpage}/>
           </Switch>
            <Footer />
             </div>
        );
      }
}
    
 
 
 
export default App;
