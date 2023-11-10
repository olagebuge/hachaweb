import React,{Component} from 'react';
import Slider from "react-slick";

export default class SimpleSlider extends Component {    
    render() {
            const settings = {
              dots: true,
              infinite: true,
              speed: 500,              
              slidesToShow: 3,
              slidesToScroll: 1,              
              responsive: [
                {
                  breakpoint: 768, 
                  settings: {
                    slidesToShow: 1, 
                    slidesToScroll: 1,                      
                  },
                },
              ],
            };
            return (
                <div>                  
                  <Slider {...settings}>
                    <div><img src="img/banner/banner00.webp"/></div>
                    <div><img src="img/banner/banner01.webp"/></div>
                    <div><img src="img/banner/banner02.webp"/></div>
                    <div><img src="img/banner/banner03.webp"/></div>
                    <div><img src="img/banner/banner04.webp"/></div> 
                    <div><img src="img/banner/banner05.webp"/></div>
                    <div><img src="img/banner/banner06.webp"/></div> 
                    <div><img src="img/banner/taroball.webp"/></div>                        
                  </Slider>
                </div>
              );
    }
  }