import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/thumbs";

import "./style.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import Aspas from "../../assets/aspas.png";
import { AiFillStar } from "react-icons/ai";
import { SwiperOptions } from "swiper/types/swiper-options";

export const TestimonialCarousel = () => {
  // Defina as opções do Swiper como um objeto
  const swiperOptions: SwiperOptions = {
    slidesPerView: 2,
    spaceBetween: 10,
    autoplay: { delay: 3000, disableOnInteraction: true },
    loop: true,
    grabCursor: true,
    pagination: { clickable: true },
    modules: [Pagination, Navigation, Autoplay],
  };

  return (
    <div className="copySection__swiper">
      <Swiper {...swiperOptions} className="swiper__container">
        <SwiperSlide>
          <div className="swiper__content">
            <img src={Aspas} alt="" />
            <div className="swiper_text_container">
              <p className="swiper_box_description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
              <div className="container-row-card">
                <div className="row1">
                  <div className="cliente__imagem"></div>
                  <div>
                    <div className="name-client"> Rose Almeida</div>
                    <div className="name-son">Mãe do Gustavo</div>
                  </div>
                </div>

                <div className="stars">
                  <AiFillStar size={38} style={{ color: "#FCD64E" }} />
                  <AiFillStar size={38} style={{ color: "#FCD64E" }} />
                  <AiFillStar size={38} style={{ color: "#FCD64E" }} />
                  <AiFillStar size={38} style={{ color: "#FCD64E" }} />
                  <AiFillStar size={38} style={{ color: "#FCD64E" }} />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper__content">
            <img src={Aspas} alt="" />
            <div className="swiper_text_container">
              <p className="swiper_box_description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
              <div className="container-row-card">
                <div className="row1">
                  <div className="cliente__imagem"></div>
                  <div>
                    <div className="name-client"> Rose Almeida</div>
                    <div className="name-son">Mãe do Gustavo</div>
                  </div>
                </div>

                <div className="stars">
                  <AiFillStar size={38} style={{ color: "#FCD64E" }} />
                  <AiFillStar size={38} style={{ color: "#FCD64E" }} />
                  <AiFillStar size={38} style={{ color: "#FCD64E" }} />
                  <AiFillStar size={38} style={{ color: "#FCD64E" }} />
                  <AiFillStar size={38} style={{ color: "#FCD64E" }} />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper__content">
            <img src={Aspas} alt="" />
            <div className="swiper_text_container">
              <p className="swiper_box_description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
              <div className="container-row-card">
                <div className="row1">
                  <div className="cliente__imagem"></div>
                  <div>
                    <div className="name-client"> Rose Almeida</div>
                    <div className="name-son">Mãe do Gustavo</div>
                  </div>
                </div>

                <div className="stars">
                  <AiFillStar size={38} style={{ color: "#FCD64E" }} />
                  <AiFillStar size={38} style={{ color: "#FCD64E" }} />
                  <AiFillStar size={38} style={{ color: "#FCD64E" }} />
                  <AiFillStar size={38} style={{ color: "#FCD64E" }} />
                  <AiFillStar size={38} style={{ color: "#FCD64E" }} />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper__content">
            <img src={Aspas} alt="" />
            <div className="swiper_text_container">
              <p className="swiper_box_description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
              <div className="container-row-card">
                <div className="row1">
                  <div className="cliente__imagem"></div>
                  <div>
                    <div className="name-client"> Rose Almeida</div>
                    <div className="name-son">Mãe do Gustavo</div>
                  </div>
                </div>

                <div className="stars">
                  <AiFillStar size={38} style={{ color: "#FCD64E" }} />
                  <AiFillStar size={38} style={{ color: "#FCD64E" }} />
                  <AiFillStar size={38} style={{ color: "#FCD64E" }} />
                  <AiFillStar size={38} style={{ color: "#FCD64E" }} />
                  <AiFillStar size={38} style={{ color: "#FCD64E" }} />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
