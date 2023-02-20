import React, {useState} from 'react'
import sliderJSON from "../../data/sliders.json"
import { scroller } from '../../helpers/scroller'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, A11y, EffectCoverflow } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = () => {

  const [scroll, setScroll] = useState(false);

  const handleClickPack = () => {
    setScroll(!scroll);
    if(window.innerWidth < 1000) {
      scroller("#pack", 175);
    } else {
      scroller("#pack", 100);
    }
  };

  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={false}
        effect={"coverflow"}
        speed={500}
        autoplay={{delay: 8750}}
        pagination={{
        clickable: true,
        }}
        loop={true}
        modules={[ Pagination, Autoplay, A11y, EffectCoverflow ]}
        className="MainSwiper sliderOverflow"
      >
        {(() => {
              let slider = [];
              for (let i = 0; i < sliderJSON.length; i++) {
                slider.push(
                  <SwiperSlide>
                    <Link to={sliderJSON[i].url} onClick={sliderJSON[i].url != "/" ? null : handleClickPack} className="swiper-slide">
                      <video autoPlay	loop width="100%"	muted	playsInline className="swiper-slide">
                        <source
                          src={
                          window.innerWidth <= 1000
                            ? sliderJSON[i].sourceMobile
                            : sliderJSON[i].source
                          }
                          type="video/mp4"
                        />
                      </video>
                    </Link>
                  </SwiperSlide>
                );
              }            
              return slider;
            })
            ()}
      </Swiper>   
    </>
  )
}

export default Slider