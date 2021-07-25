import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {  Pagination } from 'swiper/core';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/scrollbar/scrollbar.min.css';


import Testimony from '../Testimony/index';

SwiperCore.use([Pagination]);


type CarrouselProps = {
  datas: [{
    clienteInformation : {
      id: number;
      opinion: string;
      avatarurl: {
        url: string;
      };
      author: string;
      city: string;
      state: string;
    }
  }]
}
export default function Carrousel({ datas }: CarrouselProps) {

  const params = {
    spaceBetween: 50,
    slidesPerView: 1,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      waitForTransition: true,
    },
    loop: false,
    speed: 1000,
  }

  return (
    <Swiper {...params}>
      {datas.map((item) => {
        return (
          <SwiperSlide key={item.clienteInformation.id}>
            <span><Testimony clienteInformation={item.clienteInformation} /></span>
          </SwiperSlide>
        );
      })}
    </Swiper>
  )
}
