import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Swiper, SwiperSlide } from "swiper/react";
import client01 from "../img/clients/client-1.jpg";
import client02 from "../img/clients/client-2.jpg";
import client03 from "../img/clients/client-3.jpg";
import client04 from "../img/clients/client-4.jpg";
import client05 from "../img/clients/client-5.jpg";
import client06 from "../img/clients/client-6.jpg";
import client07 from "../img/clients/client-7.jpg";
import client08 from "../img/clients/client-8.jpg";
import client09 from "../img/clients/client-9.jpg";
import client10 from "../img/clients/client-10.jpg";
import client11 from "../img/clients/client-11.jpg";
import client12 from "../img/clients/client-12.jpg";
import client13 from "../img/clients/client-13.jpg";
import client14 from "../img/clients/client-14.jpg";
import client15 from "../img/clients/client-15.jpg";
import client16 from "../img/clients/client-16.jpg";
import client17 from "../img/clients/client-17.jpg";
import client18 from "../img/clients/client-18.jpg";
import client19 from "../img/clients/client-19.jpg";

const ClientList = () => {
  return (
    <>
      <section id="clients" className="clients">
        <div className="container" data-aos="zoom-out">
          <div className="section-header">
            <h2>Our Clients</h2>
          </div>
          <div className="clients-slider swiper">
            <Swiper
              modules={[Autoplay]}
              //spaceBetween={15}
              //slidesPerView={6}
              autoplay={{
                delay: 1500,
                disableOnInteraction: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 3,
                  spaceBetween: 5,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 5,
                },
                1024: {
                  slidesPerView: 6,
                  spaceBetween: 10,
                },
              }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
                <img src={client01} className="img-fluid" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={client02} className="img-fluid" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={client03} className="img-fluid" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={client04} className="img-fluid" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={client05} className="img-fluid" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={client06} className="img-fluid" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={client07} className="img-fluid" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={client08} className="img-fluid" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={client09} className="img-fluid" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={client10} className="img-fluid" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={client11} className="img-fluid" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={client12} className="img-fluid" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={client13} className="img-fluid" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={client14} className="img-fluid" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={client15} className="img-fluid" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={client16} className="img-fluid" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={client17} className="img-fluid" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={client18} className="img-fluid" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={client19} className="img-fluid" alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientList;
