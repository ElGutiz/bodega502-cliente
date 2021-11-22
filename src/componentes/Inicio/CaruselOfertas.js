import './CaruselOfertas.css';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
//className="CaruselDiv"

import React, { Component, useEffect, useRef, useState } from "react";
import { Carousel } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import SwiperCore, {
  Pagination,Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination,Navigation]);

//className="CaruselDiv"
function Ofertas() {

  const [users, setUser] = useState([]);


  async function prueba() {
    await fetch('http://localhost:3001/productos')
      .then(response => response.json())
      .then(data =>
        setUser(data)
      );
  }

  useEffect(() => {
    prueba()
  }, []);

  return (
    <div className='carCon'>
      <Swiper slidesPerView={1} spaceBetween={30} loop={true} pagination={{
        "clickable": true
      }} navigation={true} className="mySwiper">
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Ofertas;