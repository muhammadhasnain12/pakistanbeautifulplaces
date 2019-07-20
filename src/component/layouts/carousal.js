import React, { Component } from 'react';
import styled from 'styled-components';
import Pirchinasi from '../../pirchinasi.jpg';
import Lalazar from '../../lalazar.jpg';
import ChittaKathaLake from '../../ChittaKathaLake.jpg';
import Keil from  '../../kail.jpg';

class Carousal extends Component{
   render(){
       return(
  
      <CarousalDetails style={{marginLeft:'60px', marginRight: '60px', marginBottom: '23px'}}>
        <div className="slider">
      <figure>
         <img src={Pirchinasi} alt={Lalazar} />
         <img src={Lalazar} alt={Lalazar} />
         <img src={Keil} alt={Keil} />
         <img src={ChittaKathaLake} alt={Lalazar} />
      </figure>
      </div>
      </CarousalDetails>

);
   
}
}

export default Carousal;

const CarousalDetails = styled.div`

.slider{
  overflow: hidden;
}
.slider figure{
   position: relative;
   width:  500%;
   margin:0;
   left:0;
   animation: 10s slider infinite;
}
.slider figure img{
  //  height: 100vh;
  width: 20%;
  float: left;
}
@keyframes slider{
   0% {
     left:0;

   }
   20% {
     left: 0;
   }

   25% {
     left: -100%;
   }
   45% {
     left: -100%;
   }
   50% {
     left: -200%;
   }
   70% {
     left: -200%;
   }
   75% {
     left: -300%;
   }
  //  for 4 img
   95% {
     left: -300%;
   }
  //  for 5 img
   100% {
     left: -400%;
   }
}

`;
